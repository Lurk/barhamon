import { line } from "./line.mjs";
import { values } from "../value.mjs";
import { height, monotonic, now, one, two, width, zero } from "./defaults.mjs";
import { render } from "../ui/control.mjs";
import { sliderWithNumericInputs } from "./slider.mjs";
import { oscillatorWithConnectInput } from "./oscillator.mjs";
import { math } from "./math.mjs";
import { random } from "./random.mjs";
import { assert } from "../utils.mjs";
import { state } from "../state.mjs";
import { logic } from "./logic.mjs";
export const CONTROL_TYPES = [
    "slider",
    "oscillator",
    "math",
    "line",
    "random",
    "logic",
];
export function controlTypeGuard(t) {
    return CONTROL_TYPES.includes(t);
}
function initEvents(state) {
    const canvas = document.getElementById("canvas");
    const controls = document.getElementById("controls");
    assert(canvas, "#canvas element was not found");
    assert(controls, "#controls element was not wound");
    canvas.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target instanceof HTMLElement) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            else if (e.target.requestFullscreen) {
                e.target.requestFullscreen();
            }
        }
    });
    if (!state.areControlsVisible()) {
        controls.classList.add("hidden");
        canvas.classList.add("fill");
    }
    document.onkeyup = function (e) {
        // space
        if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
            controls.classList.toggle("hidden");
            canvas.classList.toggle("fill");
            state.toggleVisibility();
        }
    };
}
function init(state, values, outputs) {
    return (config, init) => {
        if (!init) {
            state.addControl(config);
        }
        const onRemove = () => state.removeControl(config.args.name);
        switch (config.type) {
            case "slider":
                return sliderWithNumericInputs({
                    values,
                    onRemove,
                    args: { min: 0, max: 500, value: 50, ...config.args },
                    onChange: (args) => state.updateControl({ type: config.type, args }),
                });
            case "oscillator":
                return oscillatorWithConnectInput({
                    values,
                    onRemove,
                    args: config.args,
                    onChange: (args) => state.updateControl({ type: config.type, args }),
                });
            case "math":
                return math({
                    values,
                    onRemove,
                    args: config.args,
                    onChange: (args) => state.updateControl({ type: config.type, args }),
                });
            case "line":
                return line({
                    values,
                    outputs,
                    onRemove,
                    args: config.args,
                    onChange: (args) => state.updateControl({ type: config.type, args }),
                });
            case "random":
                return random({
                    values,
                    onRemove,
                    args: config.args,
                    onChange: (args) => state.updateControl({ type: config.type, args }),
                });
            case "logic":
                return logic({
                    values,
                    onRemove,
                    args: config.args,
                    onChange: (args) => state.updateControl({ type: config.type, args }),
                });
            default:
                throw new Error("Invalid control type");
        }
    };
}
export function factory({ ctx }) {
    const vals = values();
    const outputs = new Map();
    const s = state();
    const add = init(s, vals, outputs);
    initEvents(s);
    width(vals, ctx);
    height(vals, ctx);
    zero(vals);
    one(vals);
    two(vals);
    monotonic(vals);
    now(vals);
    render({ vals, add });
    s.eachControl((c) => add(c, true));
    return outputs;
}
