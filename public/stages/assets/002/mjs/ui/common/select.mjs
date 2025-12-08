import { label } from "./label.mjs";
export function renderSelectInputTo(args) {
    const container = document.createElement("div");
    container.classList.add("input");
    args.container.appendChild(container);
    return {
        label: label({
            container,
            id: args.id,
            label: args.label,
        }),
        select: select({
            id: args.id,
            container,
            options: args.options,
            selected: args.selected,
            disabled: args.disabled,
        }),
    };
}
export function select(args) {
    const el = document.createElement("select");
    el.id = args.id + "_#_select_#_";
    el.disabled = args.disabled ?? false;
    args.options.forEach((key) => {
        const option = document.createElement("option");
        option.value = key;
        option.innerText = key;
        option.id = `${args.id}_${key}`;
        option.selected = key === args.selected;
        el.options.add(option);
    });
    args.container.appendChild(el);
    let keys = new Set(args.options);
    return {
        el,
        updateOptions: (options) => {
            const newKeys = new Set(options);
            const diff = newKeys.symmetricDifference(keys);
            diff.forEach((key) => {
                if (keys.has(key)) {
                    document.getElementById(`${args.id}_${key}`)?.remove();
                }
                else {
                    const option = document.createElement("option");
                    option.value = key;
                    option.innerText = key;
                    option.id = `${args.id}_${key}`;
                    el.options.add(option);
                }
            });
            keys = newKeys;
        },
    };
}
