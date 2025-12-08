import { renderContainer } from "../ui/common/container.mjs";
import { deserialize, serialize } from "../utils.mjs";
import { getOneNumber } from "../value.mjs";
import { connect } from "./connect.mjs";
export function color({ state, args, onRemove, onChange, }) {
    const container = renderContainer({
        id: args.name,
        type: "color",
    });
    container.onRemove(() => {
        state.colors.unregister(args.name);
        onRemove();
    });
    let componentState = { ...args };
    const preview = document.createElement("div");
    preview.classList.add("color-preview");
    preview.style.backgroundColor = `hsl(${args.hue}, ${args.saturation}%, ${args.lightness}%, ${args.alpha})`;
    container.el.appendChild(preview);
    const hue = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_hue`,
        label: "h",
        value: args.hue,
        onChange(hue) {
            componentState = { ...componentState, hue };
            onChange(componentState);
        },
    });
    const saturation = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_saturation`,
        label: "s",
        value: args.saturation,
        onChange(saturation) {
            componentState = { ...componentState, saturation };
            onChange(componentState);
        },
    });
    const lightness = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_lightness`,
        label: "l",
        value: args.lightness,
        onChange(lightness) {
            componentState = { ...componentState, lightness };
            onChange(componentState);
        },
    });
    const alpha = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_alpha`,
        label: "a",
        value: args.alpha,
        onChange(alpha) {
            componentState = { ...componentState, alpha };
            onChange(componentState);
        },
    });
    state.colors.register(args.name, (now, i) => {
        const hueValue = getOneNumber(hue(now, i)) % 360 || 360;
        const saturationValue = getOneNumber(saturation(now, i)) % 100 || 100;
        const lightnessValue = getOneNumber(lightness(now, i)) % 100 || 100;
        const alphaValue = getOneNumber(alpha(now, i)) % 1 || 1;
        preview.style.backgroundColor = `hsla(${hueValue}, ${saturationValue}%, ${lightnessValue}%, ${alphaValue})`;
        return [hueValue, saturationValue, lightnessValue, alphaValue];
    });
}
export const colorSerde = () => {
    const keys = ["name", "hue", "saturation", "lightness", "alpha"];
    return {
        toString(args) {
            return keys.map((key) => serialize(args[key])).join("");
        },
        fromString(v, val, start) {
            let local_start = start;
            const res = {
                name: "",
                hue: 0,
                saturation: 0,
                lightness: 0,
                alpha: 0,
            };
            keys.forEach((key) => {
                const { val: v, end } = deserialize(val, local_start);
                if (typeof v === "string" && key === "name") {
                    res[key] = v;
                }
                else if (key !== "name") {
                    res[key] = v;
                }
                else {
                    throw new Error(`Invalid value for ${key}: ${v}`);
                }
                local_start = end;
            });
            return { val: res, end: local_start };
        },
    };
};
