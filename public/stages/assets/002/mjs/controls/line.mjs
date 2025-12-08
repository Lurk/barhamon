import { connect } from "./connect.mjs";
import { renderContainer } from "../ui/common/container.mjs";
export function line({ values, outputs, args, onRemove, onChange }) {
    const { container } = renderContainer(args.name, true, () => {
        outputs.delete(args.name);
        onRemove();
        removeX();
        removeY();
        removeSr();
        removeVertices();
    });
    const state = { ...args };
    const { value: x, update: updateX, onRemove: removeX, selected: selectedX, } = connect({
        values,
        omit: "",
        args: {
            container,
            id: `${args.name}_x_input`,
            selected: args.x,
            label: "x",
        },
        onChange(x) {
            onChange({ ...Object.assign(state, { x }) });
        },
    });
    const { value: y, update: updateY, onRemove: removeY, selected: selectedY, } = connect({
        values,
        omit: "",
        args: {
            container,
            id: `${args.name}_y_input`,
            selected: args.y,
            label: "y",
        },
        onChange(y) {
            onChange({ ...Object.assign(state, { y }) });
        },
    });
    const { value: sr, update: updateSr, onRemove: removeSr, selected: selectedSr, } = connect({
        values,
        omit: "",
        args: {
            container,
            id: `${args.name}_sr_input`,
            selected: args.sr,
            label: "sr",
        },
        onChange(sr) {
            onChange({ ...Object.assign(state, { sr }) });
        },
    });
    const { value: vertices, update: updateVertices, onRemove: removeVertices, selected: selectedVertices, } = connect({
        values,
        omit: "",
        args: {
            container,
            id: `${args.name}_vertices_input`,
            selected: args.vertices,
            label: "vertices",
        },
        onChange(vertices) {
            onChange({ ...Object.assign(state, { vertices }) });
        },
    });
    outputs.set(args.name, {
        x,
        y,
        sr,
        vertices,
    });
    // TODO: come up with a better way to do this.
    // Because controls can be in random order, first, we need to create them all, and only then connect.
    // Somehow, without this timeout update doesn't work (at least in Safari).
    setTimeout(() => {
        updateX(args.x);
        updateY(args.y);
        updateSr(args.sr);
        updateVertices(args.vertices);
        Object.assign(state, {
            x: selectedX(),
            y: selectedY(),
            sr: selectedSr(),
            vertices: selectedVertices(),
        });
        onChange(state);
    }, 1);
}
export const lineSerde = (serialize, deserialize) => {
    const keys = ["name", "x", "y", "sr", "vertices"];
    return {
        toString(args) {
            return keys.map((key) => serialize(args[key])).join("");
        },
        fromString(val, start) {
            let local_start = start;
            const res = {
                name: "",
                x: "",
                y: "",
                sr: "",
                vertices: "",
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
