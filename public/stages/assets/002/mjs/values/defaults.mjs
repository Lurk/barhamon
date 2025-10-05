export function defaults(values, ctx) {
    let mouse_x = 0;
    let mouse_y = 0;
    document.onmousemove = (e) => {
        mouse_x = e.clientX;
        mouse_y = e.clientY;
    };
    values.register("width", () => [ctx.canvas.width]);
    values.register("height", () => [ctx.canvas.height]);
    values.register("halfWidth", () => [ctx.canvas.width / 2]);
    values.register("halfHeight", () => [ctx.canvas.height / 2]);
    values.register("zero", () => [0]);
    values.register("one", () => [1]);
    values.register("two", () => [2]);
    values.register("i", (now, i) => [i]);
    values.register("now", (now) => [now]);
    values.register("mouseX", () => [mouse_x * window.devicePixelRatio]);
    values.register("mouseY", () => [mouse_y * window.devicePixelRatio]);
}
