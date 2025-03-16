import { renderControl, renderNumberInputTo, renderRangeTo, } from "../utils.mjs";
export function sliderWithNumericInputs({ values, args, onRemove, onChange, }) {
    const { container, showValue } = renderControl(args.name, false, () => {
        values.unregister(args.name);
        onRemove();
    });
    showValue((args.value ?? 50).toPrecision(6));
    const to = renderNumberInputTo({
        id: `${args.name}_max`,
        label: "",
        container,
        value: args.max ?? 500,
    });
    const s = renderRangeTo({
        id: args.name,
        max: args.max ?? 500,
        min: args.min ?? 0,
        value: args.value ?? 50,
        container,
        label: "",
    });
    const from = renderNumberInputTo({
        id: `${args.name}_min`,
        label: "",
        container,
        value: args.min ?? 0,
    });
    const change = () => {
        debugger;
        onChange({
            name: args.name,
            min: s.min ? parseFloat(s.min) : 0,
            value: s.valueAsNumber,
            max: s.max ? parseFloat(s.max) : 500,
        });
    };
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
    values.register(args.name, () => {
        const val = s.valueAsNumber;
        showValue(val.toPrecision(6));
        return val;
    });
    // TODO: come up with a better way to do this.
    // Because controls can be in random order, first, we need to create them all, and only then connect.
    // Somehow, without this timeout update doesn't work (at least in Safari).
    setTimeout(() => {
        s.min = args.min ? String(args.min) : s.min;
        s.max = args.max ? String(args.max) : s.max;
        s.value = args.value ? String(args.value) : s.value;
    }, 1);
}
