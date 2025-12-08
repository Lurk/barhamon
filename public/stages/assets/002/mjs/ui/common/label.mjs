export function label(args) {
    const label = document.createElement("label");
    label.htmlFor = args.id;
    label.innerHTML = args.label ?? args.id;
    args.container.appendChild(label);
    return (text) => {
        label.innerText = text;
    };
}
