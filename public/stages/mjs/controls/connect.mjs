import { assert, renderSelectInputTo, } from "../utils.mjs";
export function connect({ values, omit, args, onChange }) {
    const element = renderSelectInputTo({ ...args, options: values.keys() });
    const onChangeCb = (keys) => {
        element.updateOptions(keys.filter((k) => k !== omit));
    };
    values.onChange(onChangeCb);
    assert(element.el instanceof HTMLSelectElement, `element with id='${args.id}' is not HTMLSelectElement`);
    element.el.addEventListener("change", () => onChange(element.el.value));
    return {
        value: (now, i) => {
            return values.get(element.el.value)?.(now, i) ?? 0;
        },
        update: (val) => {
            if (val) {
                element.el.value = val;
            }
        },
        onRemove() {
            values.unsubscribe(onChangeCb);
        },
        selected() {
            return element.el.value;
        },
    };
}
