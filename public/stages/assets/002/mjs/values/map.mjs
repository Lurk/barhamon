import { renderContainer } from "../ui/common/container.mjs";
import { deserialize, serialize } from "../utils.mjs";
import { getOneNumber } from "../value.mjs";
import { connect } from "./connect.mjs";
export function map({ state, args, onChange, onRemove, }) {
    const container = renderContainer({
        id: args.name,
        type: "mapper",
    });
    container.showValue("0");
    container.onRemove(() => {
        state.values.unregister(args.name);
        onRemove();
    });
    let componentState = { ...args };
    const sourceValue = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_source`,
        label: `source`,
        value: args.source,
        onChange(source) {
            componentState = { ...componentState, source };
            onChange(componentState);
        },
    });
    const fromMinValue = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_from_min`,
        label: `min`,
        value: args.fromMin,
        onChange(fromMin) {
            componentState = { ...componentState, fromMin };
            onChange(componentState);
        },
    });
    const fromMaxValue = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_from_max`,
        label: `max`,
        value: args.fromMax,
        onChange(fromMax) {
            componentState = { ...componentState, fromMax };
            onChange(componentState);
        },
    });
    const toMinValue = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_to_min`,
        label: `to min`,
        value: args.toMin,
        onChange(toMin) {
            componentState = { ...componentState, toMin };
            onChange(componentState);
        },
    });
    const toMaxValue = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_to_max`,
        label: `to max`,
        value: args.toMax,
        onChange(toMax) {
            componentState = { ...componentState, toMax };
            onChange(componentState);
        },
    });
    state.values.register(args.name, (now, i) => {
        const fromMin = getOneNumber(fromMinValue(now, i));
        const fromMax = getOneNumber(fromMaxValue(now, i));
        const toMin = getOneNumber(toMinValue(now, i));
        const toMax = getOneNumber(toMaxValue(now, i));
        const source = getOneNumber(sourceValue(now, i));
        const val = ((source - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin;
        container.showValue(val.toPrecision(6));
        return [val];
    });
}
export const mapSerde = () => {
    const keys = [
        "name",
        "source",
        "fromMin",
        "fromMax",
        "toMin",
        "toMax",
    ];
    return {
        toString(args) {
            return keys.map((key) => serialize(args[key])).join("");
        },
        fromString(v, val, start) {
            let local_start = start;
            const res = {
                name: "",
                source: 0,
                fromMin: 0,
                fromMax: 0,
                toMin: 0,
                toMax: 0,
            };
            keys.forEach((key) => {
                const { val: v, end } = deserialize(val, local_start);
                if (typeof v === "string" && key === "name") {
                    res[key] = v;
                }
                else if (key === "source" ||
                    key === "fromMin" ||
                    key === "fromMax" ||
                    key === "toMin" ||
                    key === "toMax") {
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
