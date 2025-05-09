import { path, initFullScreenCanvas } from "./canvas.mjs";
import { factory } from "./controls/factory.mjs";
const ctx = initFullScreenCanvas({
    id: "canvas",
    backgroundCollor: "#2b2a2a",
});
const outputs = factory({ ctx });
function animate() {
    requestAnimationFrame((now) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();
        ctx.strokeStyle = "#cccccc";
        ctx.lineWidth = 1;
        for (const { y, x, sr: resolution, vertices } of outputs.values()) {
            path({
                ctx,
                now,
                len: vertices(now, 0),
                resolution: resolution(now, 0),
                x,
                y,
            });
        }
        animate();
    });
}
animate();
window.onerror = (e) => {
    alert(`press browser back (works as undo) to fix the error: ${e}`);
};
