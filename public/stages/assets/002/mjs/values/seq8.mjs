import { renderContainer } from "../ui/common/container.mjs";
import { deserialize, limiter, serialize } from "../utils.mjs";
import { getOneNumber } from "../value.mjs";
import { connect } from "./connect.mjs";
export function seq8({ state, args, onRemove, onChange, }) {
    const container = renderContainer({
        id: args.name,
        type: "seq8",
    });
    container.onRemove(() => {
        state.values.unregister(args.name);
        onRemove();
    });
    let componentState = { ...args };
    const clock = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_clock`,
        label: "clock",
        value: args.clock,
        onChange(clock) {
            componentState = { ...componentState, clock };
            onChange(componentState);
        },
    });
    const keys = [1, 2, 3, 4, 5, 6, 7, 8];
    const values = keys.map((i) => connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_${i}`,
        label: `${i}`,
        value: args[i],
        onChange(value) {
            componentState = { ...componentState, [i]: value };
            onChange(componentState);
        },
    }));
    const showValue = limiter(100, (val) => container.showValue(val));
    state.values.register(args.name, (now, i) => {
        const clockValue = getOneNumber(clock(now, i));
        const index = clockValue % 8;
        const val = getOneNumber(values[index](now, i));
        showValue(val.toPrecision(6));
        return [val];
    });
}
export const seq8Serde = () => {
    const keys = ["name", "clock", 1, 2, 3, 4, 5, 6, 7, 8];
    return {
        toString(args) {
            return keys.map((key) => serialize(args[key])).join("");
        },
        fromString(version, val, start) {
            let local_start = start;
            const res = {
                name: "",
                clock: "",
                1: "",
                2: "",
                3: "",
                4: "",
                5: "",
                6: "",
                7: "",
                8: "",
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
