import { box, circle, path } from "./canvas.mjs";
import { getOneNumber } from "./value.mjs";
export function animation(args) {
    const onFrameCallbacks = [];
    const onStateChangeCallbacks = [];
    const frameLength = 1000 / 60;
    const pos = 0;
    const state = {
        state: "paused",
        now: pos * frameLength,
        frame: pos,
    };
    const changeState = (newState) => {
        state.state = newState;
        onStateChangeCallbacks.forEach((cb) => cb(state.state));
    };
    args.canvas.onResizeSubscribe(() => {
        frame({ ...args, now: state.now });
        onFrameCallbacks.forEach((cb) => cb(state.now));
    });
    const forward = () => {
        state.frame += 1;
        state.now = state.frame * frameLength;
        frame({ ...args, now: state.now });
        onFrameCallbacks.forEach((cb) => cb(state.now));
    };
    const download = (blob) => {
        if (blob) {
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `stages_${state.frame}.png`;
            a.click();
            URL.revokeObjectURL(a.href);
            return true;
        }
        return false;
    };
    const play = () => {
        requestAnimationFrame(() => {
            if (state.state === "playing") {
                state.frame += 1;
                state.now = state.frame * frameLength;
                frame({ ...args, now: state.now });
                onFrameCallbacks.forEach((cb) => cb(state.now));
                play();
            }
        });
    };
    return {
        play() {
            changeState("playing");
            play();
        },
        pause: () => {
            changeState("paused");
        },
        forward,
        backward: () => {
            state.frame = state.frame > 0 ? state.frame - 1 : 0;
            state.now = state.frame * frameLength;
            frame({ ...args, now: state.now });
            onFrameCallbacks.forEach((cb) => cb(state.now));
        },
        getState: () => state.state,
        getNow: () => state.now,
        getFrame: () => state.frame,
        onFrameSubscribe: (cb) => {
            onFrameCallbacks.push(cb);
        },
        onFrameUnsubscribe: (cb) => {
            const index = onFrameCallbacks.indexOf(cb);
            if (index > -1) {
                onFrameCallbacks.splice(index, 1);
            }
        },
        onStateChangeSubscribe: (cb) => {
            onStateChangeCallbacks.push(cb);
        },
        onStateChangeUnsubscribe: (cb) => {
            const index = onStateChangeCallbacks.indexOf(cb);
            if (index > -1) {
                onStateChangeCallbacks.splice(index, 1);
            }
        },
        screenshot: () => {
            args.canvas.ctx.canvas.toBlob(download, "image/png", 1.0);
        },
        record: () => {
            if (state.state !== "paused") {
                return;
            }
            changeState("recording");
            const advance = () => {
                if (state.state !== "recording") {
                    return;
                }
                args.canvas.ctx.canvas.toBlob((b) => {
                    if (download(b)) {
                        forward();
                    }
                    requestAnimationFrame(advance);
                }, "image/png", 1.0);
            };
            requestAnimationFrame(advance);
        },
    };
}
export function frame({ canvas, outputs, now }) {
    canvas.ctx.fillStyle = "#2b2a2a";
    canvas.ctx.fillRect(0, 0, canvas.ctx.canvas.width, canvas.ctx.canvas.height);
    for (const output of outputs.values()) {
        switch (output.kind) {
            case "line":
                path({
                    ctx: canvas.ctx,
                    now,
                    len: getOneNumber(output.value.vertices(now, 0)),
                    sampleRate: getOneNumber(output.value.sr(now, 0)),
                    x: output.value.x,
                    y: output.value.y,
                    color: output.value.color,
                });
                break;
            case "box":
                box({
                    ctx: canvas.ctx,
                    now,
                    len: getOneNumber(output.value.amount(now, 0)),
                    sampleRate: getOneNumber(output.value.sr(now, 0)),
                    x: output.value.x,
                    y: output.value.y,
                    width: output.value.width,
                    height: output.value.height,
                    color: output.value.color,
                });
                break;
            case "circle":
                circle({
                    ctx: canvas.ctx,
                    now,
                    len: getOneNumber(output.value.amount(now, 0)),
                    sampleRate: getOneNumber(output.value.sr(now, 0)),
                    x: output.value.x,
                    y: output.value.y,
                    radius: output.value.radius,
                    color: output.value.color,
                });
                break;
            default:
                //@ts-expect-error
                throw new Error(`Unknown output kind: ${output.kind}`);
        }
    }
}
