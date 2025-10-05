import { renderContainer } from "../ui/common/container.mjs";
import { numberInput } from "../ui/common/number_input.mjs";
import { renderRangeTo } from "../ui/common/range.mjs";
import { deserialize, serialize } from "../utils.mjs";
export function sliderWithNumericInputs({ state, args, onRemove, onChange, }) {
    const container = renderContainer({ id: args.name });
    container.showValue((args.value ?? 50).toPrecision(6));
    container.onRemove(() => {
        state.values.unregister(args.name);
        onRemove();
    });
    const to = numberInput({
        id: `${args.name}_max`,
        container: container.el,
        value: args.max ?? 500,
    });
    const s = renderRangeTo({
        id: args.name,
        max: args.max ?? 500,
        min: args.min ?? 0,
        value: args.value ?? 50,
        container: container.el,
        label: "",
    });
    const from = numberInput({
        id: `${args.name}_min`,
        container: container.el,
        value: args.min ?? 0,
    });
    const change = () => onChange({
        name: args.name,
        min: s.min ? parseFloat(s.min) : 0,
        value: s.valueAsNumber,
        max: s.max ? parseFloat(s.max) : 500,
    });
    from.addEventListener("change", () => {
        s.min = from.value;
        change();
    });
    to.addEventListener("change", () => {
        s.max = to.value;
        change();
    });
    s.addEventListener("change", change);
    s.value = String(args.value ?? 50);
    state.values.register(args.name, () => {
        const val = s.valueAsNumber;
        container.showValue(val.toPrecision(6));
        return [val];
    });
    change();
}
export const sliderSerde = () => {
    const keys = ["name", "min", "value", "max"];
    return {
        toString(args) {
            return keys
                .map((key) => typeof args[key] === "string"
                ? serialize(args[key])
                : serialize(args[key]?.toString()))
                .join("");
        },
        fromString(v, val, start) {
            let local_start = start;
            const res = {
                name: "",
                min: 0,
                value: 0,
                max: 0,
            };
            keys.forEach((key) => {
                const { val: v, end } = deserialize(val, local_start);
                local_start = end;
                if (key === "name" && typeof v === "string") {
                    res[key] = v;
                }
                else if (key !== "name" && typeof v === "number") {
                    res[key] = v;
                }
                else if (key !== "name" && typeof v === "string") {
                    res[key] = parseFloat(v);
                }
                else {
                    throw new Error(`Invalid value for ${key}: ${v}`);
                }
            });
            return { val: res, end: local_start };
        },
    };
};
