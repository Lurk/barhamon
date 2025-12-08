import { connect } from "./connect.mjs";
import { renderSelectInputTo } from "../ui/common/select.mjs";
import { renderContainer } from "../ui/common/container.mjs";
import { spanWithText } from "../ui/common/span.mjs";
import { limiter } from "../utils.mjs";
const options = [
    "sum",
    "sub",
    "mul",
    "pow",
    "div",
    "avg",
    "min",
    "max",
];
function evaluate(o, lhs, rhs, now, i) {
    switch (o) {
        case "sum":
            return lhs(now, i) + rhs(now, i);
        case "sub":
            return lhs(now, i) - rhs(now, i);
        case "mul":
            return lhs(now, i) * rhs(now, i);
        case "pow":
            return Math.pow(lhs(now, i), rhs(now, i));
        case "div":
            return lhs(now, i) / rhs(now, i);
        case "avg":
            return (lhs(now, i) + rhs(now, i)) / 2;
        case "min":
            return Math.min(lhs(now, i), rhs(now, i));
        case "max":
            return Math.max(lhs(now, i), rhs(now, i));
        default:
            throw new Error(`option: ${o} is not supported`);
    }
}
export function math({ values, args, onRemove, onChange }) {
    const { container, showValue } = renderContainer(args.name, false, () => {
        values.unregister(`${args.name}_a`);
        values.unregister(`${args.name}_b`);
        onRemove();
        lhs1_r();
        rhs1_r();
        lhs2_r();
        rhs2_r();
    });
    const state = { ...args };
    const { el: mode_a } = renderSelectInputTo({
        id: `${args.name}_mode_a`,
        label: "mode",
        selected: args.mode_a,
        options,
        container,
    });
    mode_a.addEventListener("change", () => {
        onChange({ ...Object.assign(state, { mode_a: mode_a.value }) });
    });
    const { value: lhs1, update: lhs1_u, onRemove: lhs1_r, selected: selectedLhs1, } = connect({
        values,
        omit: `${args.name}_a`,
        args: {
            id: `${args.name}_lhs1`,
            label: `lhs`,
            container,
            selected: args.lhs1,
        },
        onChange(lhs1) {
            onChange({ ...Object.assign(state, { lhs1 }) });
        },
    });
    const { value: rhs1, update: rhs1_u, onRemove: rhs1_r, selected: selectedRhs1, } = connect({
        values,
        omit: `${args.name}_a`,
        args: {
            id: `${args.name}_rhs1`,
            label: `rhs`,
            container,
            selected: args.rhs2,
        },
        onChange(rhs1) {
            onChange({ ...Object.assign(state, { rhs1 }) });
        },
    });
    const showValue2 = spanWithText(container, "0");
    const { el: mode_b } = renderSelectInputTo({
        id: `${args.name}_mode_b`,
        label: "mode",
        selected: args.mode_b,
        options,
        container,
    });
    mode_b.addEventListener("change", () => {
        onChange({ ...Object.assign(state, { mode_b: mode_b.value }) });
    });
    const { value: lhs2, update: lhs2_u, onRemove: lhs2_r, selected: selectedLhs2, } = connect({
        values,
        omit: `${args.name}_b`,
        args: {
            id: `${args.name}_lhs2`,
            label: `lhs`,
            container,
            selected: args.lhs2,
        },
        onChange(lhs2) {
            onChange({ ...Object.assign(state, { lhs2 }) });
        },
    });
    const { value: rhs2, update: rhs2_u, onRemove: rhs2_r, selected: selectedRhs2, } = connect({
        values,
        omit: `${args.name}_b`,
        args: {
            id: `${args.name}_in4`,
            label: `rhs`,
            container,
            selected: args.rhs2,
        },
        onChange(rhs2) {
            onChange({ ...Object.assign(state, { rhs2 }) });
        },
    });
    values.register(`${args.name}_a`, (now, i) => {
        const val = evaluate(mode_a.value, lhs1, rhs1, now, i);
        showValue(val.toPrecision(6));
        return val;
    });
    const limitedVelueB = limiter(100, (val) => showValue2(val));
    values.register(`${args.name}_b`, (now, i) => {
        const val = evaluate(mode_b.value, lhs2, rhs2, now, i);
        limitedVelueB(val.toPrecision(6));
        return val;
    });
    // TODO: come up with a better way to do this.
    // Because controls can be in random order, first, we need to create them all, and only then connect.
    // Somehow, without this timeout update doesn't work (at least in Safari).
    setTimeout(() => {
        lhs1_u(args.lhs1);
        rhs1_u(args.rhs1);
        lhs2_u(args.lhs2);
        rhs2_u(args.rhs2);
        Object.assign(state, {
            mode_a: mode_a.value,
            lhs1: selectedLhs1(),
            rhs1: selectedRhs1(),
            mode_b: mode_b.value,
            lhs2: selectedLhs2(),
            rhs2: selectedRhs2(),
        });
        onChange(state);
    }, 1);
}
export const mathSerde = (serialize, deserialize) => {
    const keys = [
        "name",
        "mode_a",
        "lhs1",
        "rhs1",
        "mode_b",
        "lhs2",
        "rhs2",
    ];
    return {
        toString(args) {
            return keys.map((key) => serialize(args[key])).join("");
        },
        fromString(val, start) {
            let local_start = start;
            const res = {
                name: "",
                mode_a: "",
                lhs1: "",
                rhs1: "",
                mode_b: "",
                lhs2: "",
                rhs2: "",
            };
            keys.forEach((key) => {
                const { val: v, end } = deserialize(val, local_start);
                local_start = end;
                res[key] = v;
            });
            return { val: res, end: local_start };
        },
    };
};
