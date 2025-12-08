import { connect } from "./connect.mjs";
import { renderContainer } from "../ui/common/container.mjs";
import { deserialize, serialize } from "../utils.mjs";
import { getOneNumber } from "../value.mjs";
export function random({ state, args, onRemove, onChange, }) {
    const container = renderContainer({
        id: args.name,
        type: "random",
    });
    container.onRemove(() => {
        state.values.unregister(args.name);
        onRemove();
    });
    let componentState = { ...args };
    const min = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_min`,
        label: "min",
        onChange(min) {
            componentState = { ...componentState, min };
            onChange(componentState);
        },
    });
    const max = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_max`,
        label: "max",
        onChange(max) {
            componentState = { ...componentState, max };
            onChange(componentState);
        },
    });
    const rate = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_rate`,
        label: "rate",
        value: args.rate,
        onChange(rate) {
            componentState = { ...componentState, rate };
            onChange(componentState);
        },
    });
    let lastTime = [];
    let lastValue = [];
    state.values.register(args.name, (now, i) => {
        if (lastValue[i] === undefined ||
            now - (lastTime[i] || 0) > getOneNumber(rate(now, i))) {
            const val = Math.random() *
                (getOneNumber(max(now, i)) - getOneNumber(min(now, i))) +
                getOneNumber(min(now, i));
            container.showValue(val.toPrecision(6));
            lastValue[i] = val;
            lastTime[i] = now;
        }
        return [lastValue[i]];
    });
}
export const randomSerde = () => {
    const keys = ["name", "min", "max", "rate"];
    return {
        toString(args) {
            return keys.map((key) => serialize(args[key])).join("");
        },
        fromString(vevrison, val, start) {
            let local_start = start;
            const res = {
                name: "",
                min: 0,
                max: 0,
                rate: 25,
            };
            keys.forEach((key) => {
                if (key === "rate" && vevrison < 2) {
                    return;
                }
                const { val: v, end } = deserialize(val, local_start);
                if (key === "name" && typeof v === "string") {
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
