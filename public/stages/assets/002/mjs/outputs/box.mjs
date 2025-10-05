import { renderContainer } from "../ui/common/container.mjs";
import { assert, deserialize, serialize } from "../utils.mjs";
import { connect } from "../values/connect.mjs";
export function box({ state, args, onRemove, onChange }) {
    const container = renderContainer({
        id: args.name,
        type: "box",
        isOutput: true,
    });
    container.onRemove(() => {
        state.outputs.delete(args.name);
        onRemove();
    });
    let componentState = { ...args };
    const x = connect({
        connectable: state.values,
        omit: "",
        container,
        id: `${args.name}_x_input`,
        value: args.x,
        label: "x",
        onChange(x) {
            componentState = { ...componentState, x };
            onChange({ ...componentState });
        },
    });
    const y = connect({
        connectable: state.values,
        omit: "",
        container,
        id: `${args.name}_y_input`,
        value: args.y,
        label: "y",
        onChange(y) {
            componentState = { ...componentState, y };
            onChange({ ...componentState });
        },
    });
    const width = connect({
        connectable: state.values,
        omit: "",
        container,
        id: `${args.name}_width_input`,
        value: args.width,
        label: "width",
        onChange(width) {
            componentState = { ...componentState, width };
            onChange({ ...componentState });
        },
    });
    const height = connect({
        connectable: state.values,
        omit: "",
        container,
        id: `${args.name}_height_input`,
        value: args.height,
        label: "height",
        onChange(height) {
            componentState = { ...componentState, height };
            onChange({ ...componentState });
        },
    });
    const color = connect({
        connectable: state.colors,
        omit: "",
        container,
        id: `${args.name}_color_input`,
        value: args.color,
        label: "color",
        hasNumberInput: false,
        onChange(color) {
            assert(typeof color === "string", "color can only be provided by a color component");
            componentState = { ...componentState, color };
            onChange({ ...componentState });
        },
    });
    const amount = connect({
        connectable: state.values,
        omit: "",
        container,
        id: `${args.name}_amount_input`,
        value: args.amount,
        label: "amount",
        onChange(amount) {
            componentState = { ...componentState, amount };
            onChange({ ...componentState });
        },
    });
    const sr = connect({
        connectable: state.values,
        omit: "",
        container,
        id: `${args.name}_sr_input`,
        value: args.sr,
        label: "sr",
        onChange(sr) {
            componentState = { ...componentState, sr };
            onChange({ ...componentState });
        },
    });
    state.outputs.set(args.name, {
        kind: "box",
        value: {
            x,
            y,
            width,
            height,
            color,
            sr,
            amount,
        },
    });
}
export const boxSerde = () => {
    const keys = [
        "name",
        "x",
        "y",
        "width",
        "height",
        "amount",
        "sr",
        "color",
    ];
    return {
        toString(args) {
            return keys.map((k) => serialize(args[k])).join("");
        },
        fromString(v, val, start) {
            let local_start = start;
            const res = {
                name: "",
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                amount: 0,
                sr: 0,
                color: "",
            };
            keys.forEach((key) => {
                const { val: v, end } = deserialize(val, local_start);
                if ((key === "name" || key === "color") && typeof v === "string") {
                    res[key] = v;
                }
                else if (key !== "name" && key !== "color") {
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
