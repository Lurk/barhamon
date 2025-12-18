import { getOneNumber } from "../value.mjs";
import { connect } from "./connect.mjs";
import { renderSelectInputTo } from "../ui/common/select.mjs";
import { renderContainer } from "../ui/common/container.mjs";
import { deserialize, serialize } from "../utils.mjs";
const options = ["gt", "gte", "lt", "lte", "eq", "neq"];
function evaluate(o, lhs, rhs, isTrue, isFalse, now, i) {
    switch (o) {
        case "gt":
            return getOneNumber(lhs(now, i)) > getOneNumber(rhs(now, i))
                ? getOneNumber(isTrue(now, i))
                : getOneNumber(isFalse(now, i));
        case "gte":
            return getOneNumber(lhs(now, i)) >= getOneNumber(rhs(now, i))
                ? getOneNumber(isTrue(now, i))
                : getOneNumber(isFalse(now, i));
        case "lt":
            return getOneNumber(lhs(now, i)) < getOneNumber(rhs(now, i))
                ? getOneNumber(isTrue(now, i))
                : getOneNumber(isFalse(now, i));
        case "lte":
            return getOneNumber(lhs(now, i)) <= getOneNumber(rhs(now, i))
                ? getOneNumber(isTrue(now, i))
                : getOneNumber(isFalse(now, i));
        case "eq":
            return getOneNumber(lhs(now, i)) == getOneNumber(rhs(now, i))
                ? getOneNumber(isTrue(now, i))
                : getOneNumber(isFalse(now, i));
        case "neq":
            return getOneNumber(lhs(now, i)) != getOneNumber(rhs(now, i))
                ? getOneNumber(isTrue(now, i))
                : getOneNumber(isFalse(now, i));
        default:
            throw new Error(`option: ${o} is not supported`);
    }
}
export function logic({ state, args, onRemove, onChange, }) {
    const container = renderContainer({
        id: args.name,
        type: "logic",
    });
    container.onRemove(() => {
        state.values.unregister(args.name);
        onRemove();
    });
    let componentState = {
        ...args,
        mode: args.mode && args.mode.length > 0 ? args.mode : options[0],
    };
    const { select: { el: mode }, } = renderSelectInputTo({
        id: `${args.name}_mode`,
        label: "mode",
        selected: args.mode ?? options[0],
        options,
        container: container.el,
    });
    mode.addEventListener("change", () => {
        componentState = { ...componentState, mode: mode.value };
        onChange(componentState);
    });
    const lhs = connect({
        connectable: state.values,
        omit: `${args.name}_a`,
        container,
        id: `${args.name}_lhs`,
        label: `lhs`,
        value: args.lhs,
        onChange(lhs) {
            componentState = { ...componentState, lhs };
            onChange(componentState);
        },
    });
    const rhs = connect({
        connectable: state.values,
        omit: `${args.name}`,
        container,
        id: `${args.name}_rhs`,
        label: `rhs`,
        value: args.rhs,
        onChange(rhs) {
            componentState = { ...componentState, rhs };
            onChange(componentState);
        },
    });
    const isTrue = connect({
        connectable: state.values,
        omit: `${args.name}`,
        container,
        id: `${args.name}_is_true`,
        label: `is_true`,
        value: args.isTrue,
        onChange(is_true) {
            componentState = { ...componentState, isTrue: is_true };
            onChange(componentState);
        },
    });
    const isFalse = connect({
        connectable: state.values,
        omit: `${args.name}`,
        container,
        id: `${args.name}_is_false`,
        label: `is_false`,
        value: args.isFalse,
        onChange(is_false) {
            componentState = { ...componentState, isFalse: is_false };
            onChange(componentState);
        },
    });
    state.values.register(`${args.name}`, (now, i) => {
        const val = evaluate(mode.value, lhs, rhs, isTrue, isFalse, now, i);
        container.showValue(val.toPrecision(6));
        return [val];
    });
}
export const logicSerde = () => {
    const keys = ["name", "mode", "lhs", "rhs", "isTrue", "isFalse"];
    return {
        toString(args) {
            return keys.map((key) => serialize(args[key])).join("");
        },
        fromString(v, val, start) {
            let local_start = start;
            const res = {
                name: "",
                mode: "",
                lhs: 0,
                rhs: 0,
                isTrue: 0,
                isFalse: 0,
            };
            keys.forEach((key) => {
                const { val: v, end } = deserialize(val, local_start);
                if (typeof v === "string" && (key === "name" || key === "mode")) {
                    res[key] = v;
                }
                else if (key !== "name" && key !== "mode") {
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
