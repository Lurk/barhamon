export function recorder(ctx, toggleVisibility) {
    const cbs = [];
    const recordedChunks = [];
    const stream = ctx.canvas.captureStream(60);
    const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "video/mp4",
    });
    mediaRecorder.ondataavailable = (event) => {
        recordedChunks.push(event.data);
    };
    mediaRecorder.onstop = () => {
        const anchor = document.createElement("a");
        document.body.appendChild(anchor);
        anchor.href = URL.createObjectURL(new Blob(recordedChunks, { type: "video/mp4" }));
        anchor.download = "recording.mp4";
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(anchor.href);
        cbs.forEach((cb) => cb("inactive"));
        toggleVisibility();
    };
    return {
        state: () => mediaRecorder.state,
        subscribe: (cb) => cbs.push(cb),
        unsubscribe: (cb) => cbs.splice(cbs.indexOf(cb), 1),
        start: () => {
            toggleVisibility();
            mediaRecorder.start();
            cbs.forEach((cb) => cb("recording"));
        },
        stop: () => mediaRecorder.stop(),
    };
}
