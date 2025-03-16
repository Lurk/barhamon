import { wave } from "../value.mjs";
import { renderControl } from "../utils.mjs";
import { connect } from "./connect.mjs";
export function oscillatorWithConnectInput({ values, args, onRemove, onChange, }) {
    const { container, showValue } = renderControl(args.name, false, () => {
        values.unregister(args.name);
        onRemove();
        removeMin();
        removeMax();
        removeRaise();
        removeFall();
    });
    const state = { ...args };
    const { value: min, update: updateMin, onRemove: removeMin, selected: selectedMin, } = connect({
        values,
        omit: args.name,
        args: {
            id: `${args.name}_min`,
            label: "min",
            selected: args.min,
            container,
        },
        onChange(min) {
            onChange({ ...Object.assign(state, { min }) });
        },
    });
    const { value: max, update: updateMax, onRemove: removeMax, selected: selectedMax, } = connect({
        values,
        omit: args.name,
        args: {
            id: `${args.name}_max`,
            label: "max",
            selected: args.max,
            container,
        },
        onChange(max) {
            onChange({ ...Object.assign(state, { max }) });
        },
    });
    const { value: raise, update: updateRaise, onRemove: removeRaise, selected: selectedRaise, } = connect({
        values,
        omit: args.name,
        args: {
            id: `${args.name}_raise`,
            label: "raise",
            selected: args.raise,
            container,
        },
        onChange(raise) {
            onChange({ ...Object.assign(state, { raise }) });
        },
    });
    const { value: fall, update: updateFall, onRemove: removeFall, selected: selectedFall, } = connect({
        values,
        omit: args.name,
        args: {
            id: `${args.name}_fall`,
            label: "fall",
            selected: args.fall,
            container,
        },
        onChange(fall) {
            onChange({ ...Object.assign(state, { fall }) });
        },
    });
    const w = wave({
        min,
        max,
        raise,
        fall,
    });
    values.register(args.name, (now, i) => {
        const val = w(now, i);
        showValue(val.toPrecision(6));
        return val;
    });
    // TODO: come up with a better way to do this.
    // Because controls can be in random order, first, we need to create them all, and only then connect.
    // Somehow, without this timeout update doesn't work (at least in Safari).
    setTimeout(() => {
        updateMin(args.min);
        updateMax(args.max);
        updateRaise(args.raise);
        updateFall(args.fall);
        onChange({
            min: selectedMin(),
            max: selectedMax(),
            raise: selectedRaise(),
            fall: selectedFall(),
            ...state,
        });
    }, 10);
}
