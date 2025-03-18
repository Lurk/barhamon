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
export function two(values) {
    values.register("two", () => 2);
}
export function monotonic(values) {
    values.register("i", (now, i) => i);
}
export function now(values) {
    values.register("now", (now, i) => now);
}
