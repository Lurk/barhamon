import { label } from "./label.mjs";
export function renderNumberInputTo(args) {
    const root = args.container;
    const container = document.createElement("div");
    container.classList.add("input");
    label({
        container,
        id: args.id,
        label: args.label,
    });
    const el = numberInput({
        id: args.id,
        container,
        value: args.value,
    });
    root.appendChild(container);
    return el;
}
export function numberInput(args) {
    const el = document.createElement("input");
    el.value = String(args.value ?? "0");
    el.type = "number";
    el.id = args.id;
    el.step = "0.00001";
    args.container.appendChild(el);
    return el;
}
