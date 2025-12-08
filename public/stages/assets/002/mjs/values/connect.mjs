import { label } from "../ui/common/label.mjs";
import { numberInput } from "../ui/common/number_input.mjs";
import { select } from "../ui/common/select.mjs";
import { toggle } from "../ui/common/toggle.mjs";
import { assert } from "../utils.mjs";
export function connect(args) {
    const connectContainer = document.createElement("div");
    connectContainer.classList.add("input");
    connectContainer.classList.add("withToggle");
    const isStatic = toggle({
        container: connectContainer,
        isActive: typeof args.value === "number",
        disabled: args.hasNumberInput === false,
        onChange: (isActive) => {
            if (isActive) {
                number.classList.remove("hidden");
                s.el.classList.add("hidden");
                args.onChange(number.valueAsNumber);
            }
            else {
                s.el.classList.remove("hidden");
                number.classList.add("hidden");
                args.onChange(s.el.value);
            }
        },
    });
    label({
        container: connectContainer,
        id: args.id,
        label: args.label,
    });
    const number = numberInput({
        id: args.id,
        container: connectContainer,
        value: typeof args.value === "number" ? args.value : 0,
    });
    number.addEventListener("change", () => {
        if (isStatic.isActive()) {
            args.onChange(number.valueAsNumber);
        }
    });
    const s = select({
        id: args.id,
        options: args.connectable.keys(),
        container: connectContainer,
        selected: typeof args.value === "string" ? args.value : undefined,
    });
    s.el.addEventListener("change", () => args.onChange(s.el.value));
    if (isStatic.isActive()) {
        number.classList.remove("hidden");
        s.el.classList.add("hidden");
    }
    else {
        s.el.classList.remove("hidden");
        number.classList.add("hidden");
    }
    const onChangeCb = (keys) => {
        s.updateOptions(keys.filter((k) => k !== args.omit));
    };
    args.connectable.onChange(onChangeCb);
    args.container.el.appendChild(connectContainer);
    args.container.onRemove(() => args.connectable.unsubscribe(onChangeCb));
    // TODO: come up with a better way to do this.
    // Because controls can be in random order, first, we need to create them all, and only then connect.
    // Somehow, without this timeout update doesn't work (at least in Safari).
    setTimeout(() => {
        if (typeof args.value === "string") {
            s.el.value = args.value;
        }
        else if (typeof args.value === "number") {
            number.value = args.value.toString() ?? "0";
        }
        else if (args.value === undefined) {
        }
        else {
            assert(false, `val is not string or number`);
        }
        if (typeof args.value === "number") {
            args.onChange(number.valueAsNumber);
        }
        else {
            args.onChange(s.el.value);
        }
    }, 1);
    return (now, i) => {
        return isStatic.isActive()
            ? [number.valueAsNumber]
            : (args.connectable.get(s.el.value)?.(now, i) ?? [0]);
    };
}
