import { renderContainer } from "../ui/common/container.mjs";
import { spanWithText } from "../ui/common/span.mjs";
import { deserialize, serialize } from "../utils.mjs";
import { getOneNumber } from "../value.mjs";
import { connect } from "./connect.mjs";
export function clock({ state, args, onChange, onRemove, }) {
    const container = renderContainer({
        id: args.name,
        type: "clock",
    });
    container.onRemove(() => {
        state.values.unregister(args.name);
        onRemove();
    });
    let componentState = { ...args };
    const rate = connect({
        connectable: state.values,
        omit: "clock",
        container,
        id: `${args.name}_rate`,
        label: "rate",
        value: args.rate,
        onChange(rate) {
            componentState = { ...componentState, rate };
            onChange(componentState);
        },
    });
    const source = connect({
        connectable: state.values,
        omit: args.name,
        container,
        id: `${args.name}_source`,
        label: "source",
        value: args.source ?? "now",
        onChange(source) {
            componentState = { ...componentState, source };
            onChange(componentState);
        },
    });
    const table = document.createElement("div");
    table.classList.add("clockTable");
    for (let j = 1; j <= 16; j++) {
        const row = document.createElement("div");
        spanWithText(row, `${j}:`);
        const val = spanWithText(row, "0");
        table.appendChild(row);
        state.values.register(`${args.name}_${j}`, (now, i) => {
            const rateValue = getOneNumber(rate(now, i));
            const sourceValue = getOneNumber(source(now, i));
            let value = 0;
            if (rateValue !== 0) {
                value = Math.floor(sourceValue / (rateValue * j));
            }
            val((1 + value).toString());
            return [value];
        });
    }
    container.el.appendChild(table);
}
export const clockSerde = () => {
    const keys = ["name", "rate", "source"];
    return {
        toString: (args) => keys.map((key) => serialize(args[key])).join(""),
        fromString(version, val, start) {
            let local_start = start;
            const res = {
                name: "",
                source: "now",
                rate: 0,
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
