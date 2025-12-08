import { line } from "../outputs/line.mjs";
import { values } from "../value.mjs";
import { defaults } from "./defaults.mjs";
import { render } from "../ui/factory/index.mjs";
import { sliderWithNumericInputs } from "./slider.mjs";
import { oscillatorWithConnectInput } from "./oscillator.mjs";
import { math } from "./math.mjs";
import { random } from "./random.mjs";
import { assert } from "../utils.mjs";
import { state } from "../state.mjs";
import { logic } from "./logic.mjs";
import { initFullScreenCanvas } from "../canvas.mjs";
import { animate } from "../animation.mjs";
import { outputs } from "../output.mjs";
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
function initEvents({ fullScreenTarget, toggleVisibility }) {
    fullScreenTarget.addEventListener("click", (e) => {
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
    document.onkeyup = function (e) {
        // space
        if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
            toggleVisibility();
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
                    args: config.args,
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
export function factory() {
    const vals = values();
    const outputsState = outputs();
    const s = state();
    const add = init(s, vals, outputsState);
    const controls = document.getElementById("controls");
    assert(controls, "#controls element was not wound");
    const canvas = initFullScreenCanvas({
        id: "canvas",
        backgroundCollor: "#2b2a2a",
    });
    if (!s.areControlsVisible()) {
        controls.classList.add("hidden");
        canvas.ctx.canvas.classList.add("fill");
    }
    render({
        vals,
        add,
        canvas,
    });
    initEvents({
        fullScreenTarget: canvas.ctx.canvas,
        toggleVisibility: () => {
            controls.classList.toggle("hidden");
            canvas.ctx.canvas.classList.toggle("fill");
            s.toggleVisibility();
        },
    });
    defaults(vals, canvas.ctx);
    s.eachControl((c) => add(c, true));
    animate({
        canvas,
        outputs: outputsState,
    });
}
