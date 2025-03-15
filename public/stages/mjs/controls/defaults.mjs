export function width(values, ctx) {
    values.register("width", () => ctx.canvas.width);
}
export function height(values, ctx) {
    values.register("height", () => ctx.canvas.height);
}
export function zero(values) {
    values.register("zero", () => 0);
}
export function one(values) {
    values.register("one", () => 1);
}
export function monotonic(values) {
    values.register("i", (now, i) => i);
}
