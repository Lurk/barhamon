export function toggle(args) {
    let isActive = !!args.isActive;
    const el = document.createElement("button");
    el.classList.add("toggle");
    el.classList.toggle("active", isActive);
    el.addEventListener("click", () => {
        isActive = !isActive;
        el.classList.toggle("active");
        args.onChange(isActive);
    });
    el.disabled = args.disabled ?? false;
    args.container.appendChild(el);
    return {
        isActive: () => isActive,
        toggle: (force) => {
            const nextIsActive = force ?? !isActive;
            if (nextIsActive === isActive)
                return;
            el.classList.toggle("active", force);
            isActive = nextIsActive;
            args.onChange(isActive);
        },
    };
}
