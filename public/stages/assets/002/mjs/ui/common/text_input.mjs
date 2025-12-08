export function renderTextInputTo(args) {
    const el = document.createElement("input");
    const container = document.createElement("div");
    container.classList.add("input");
    const label = document.createElement("label");
    label.htmlFor = args.label;
    label.innerText = args.label;
    el.value = String(args.value ?? "");
    el.type = "text";
    el.id = args.label;
    container.appendChild(label);
    container.appendChild(el);
    args.container.appendChild(container);
    return el;
}
