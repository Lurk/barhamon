export function renderRangeTo(args) {
    const min = args.min ?? 0;
    const step = args.step ?? 0.00001;
    const max = args.max ?? 100;
    const el = document.createElement("input");
    const container = document.createElement("div");
    container.classList.add("slider");
    el.type = "range";
    el.min = String(min);
    el.max = String(max);
    el.value = String(args.value ?? min);
    el.step = String(step);
    el.id = args.id;
    container.appendChild(el);
    args.container.appendChild(container);
    return el;
}
