import { assert } from "./utils.mjs";
export function initFullScreenCanvas({ backgroundCollor, id, }) {
    const body = document.querySelector("body");
    assert(body, "body must be present");
    body.style.backgroundColor = backgroundCollor;
    const canvasElement = document.getElementById(id);
    assert(canvasElement, `canvas with id='${id}' must be present`);
    canvasElement.style.backgroundColor = backgroundCollor;
    assert(canvasElement instanceof HTMLCanvasElement, `element with id='${id}' found but it is not canvas`);
    const ctx = canvasElement.getContext("2d");
    assert(ctx, "could not get 2d context");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    const observer = new ResizeObserver(() => {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
    });
    observer.observe(canvasElement);
    return ctx;
}
export function createMeter({ ctx, backgroundColor = "#797d62", textColor = "#cabbb1", }) {
    const index = new Map();
    let maxWidth = 0;
    return ({ key, value }) => {
        let i = index.get(key);
        if (i === undefined) {
            i = index.size + 1;
            index.set(key, i);
        }
        const text = `${key}: ${value}`;
        ctx.font = "20px dsm";
        const size = ctx.measureText(text);
        if (size.width > maxWidth) {
            maxWidth = size.width;
        }
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, (i - 1) * 25, maxWidth + 20, 30);
        ctx.fillStyle = textColor;
        ctx.fillText(text, 20, i * 25);
    };
}
export function path(opts) {
    const now = Math.floor(opts.now / opts.resolution) * opts.resolution;
    opts.ctx.moveTo(opts.x(now, 0), opts.y(now, 0));
    const arr = [];
    for (let i = 1; i < opts.len; i++) {
        let foo = now + i * opts.resolution;
        arr.push(opts.y(foo, i));
        opts.ctx.lineTo(opts.x(foo, i), opts.y(foo, i));
    }
    opts.ctx.stroke();
}
