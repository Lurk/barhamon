import { line } from "./outputs/line.mjs";
import { defaults } from "./values/defaults.mjs";
import { render } from "./ui/factory/index.mjs";
import { sliderWithNumericInputs } from "./values/slider.mjs";
import { oscillatorWithConnectInput, } from "./values/oscillator.mjs";
import { math } from "./values/math.mjs";
import { random } from "./values/random.mjs";
import { assert } from "./utils.mjs";
import { url } from "./url.mjs";
import { logic } from "./values/logic.mjs";
import { initFullScreenCanvas } from "./canvas.mjs";
import { animation } from "./animation.mjs";
import { map } from "./values/map.mjs";
import { state } from "./state.mjs";
import { color } from "./values/color.mjs";
import { box } from "./outputs/box.mjs";
import { circle } from "./outputs/circle.mjs";
import { clock } from "./values/clock.mjs";
import { seq8 } from "./values/seq8.mjs";
export const CONTROL_TYPES = [
    "box",
    "circle",
    "clock",
    "color",
    "line",
    "logic",
    "map",
    "math",
    "oscillator",
    "random",
    "slider",
    "seq8",
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
function init(url, state) {
    return (config, init) => {
        if (!init) {
            url.addControl(config);
        }
        const onRemove = () => url.removeControl(config.args.name);
        switch (config.type) {
            case "slider":
                return sliderWithNumericInputs({
                    state,
                    onRemove,
                    args: config.args,
                    onChange: (args) => url.updateControl({ type: config.type, args }),
                });
            case "oscillator":
                return oscillatorWithConnectInput({
                    state,
                    onRemove,
                    args: config.args,
                    onChange: (args) => url.updateControl({ type: config.type, args }),
                });
            case "math":
                return math({
                    state,
                    onRemove,
                    args: config.args,
                    onChange: (args) => url.updateControl({ type: config.type, args }),
                });
            case "line":
                return line({
                    state,
                    onRemove,
                    args: config.args,
                    onChange: (args) => url.updateControl({ type: config.type, args }),
                });
            case "random":
                return random({
                    state,
                    onRemove,
                    args: config.args,
                    onChange: (args) => url.updateControl({ type: config.type, args }),
                });
            case "logic":
                return logic({
                    state,
                    onRemove,
                    args: config.args,
                    onChange: (args) => url.updateControl({ type: config.type, args }),
                });
            case "map":
                return map({
                    state,
                    onRemove,
                    args: config.args,
                    onChange: (args) => url.updateControl({ type: config.type, args }),
                });
            case "color":
                return color({
                    state,
                    onRemove,
                    args: config.args,
                    onChange: (args) => url.updateControl({ type: config.type, args }),
                });
            case "box":
                return box({
                    state,
                    onRemove,
                    args: config.args,
                    onChange: (args) => url.updateControl({ type: config.type, args }),
                });
            case "circle":
                return circle({
                    state,
                    onRemove,
                    args: config.args,
                    onChange: (args) => url.updateControl({ type: config.type, args }),
                });
            case "clock":
                return clock({
                    state,
                    onRemove,
                    args: config.args,
                    onChange: (args) => url.updateControl({ type: config.type, args }),
                });
            case "seq8":
                return seq8({
                    state,
                    onRemove,
                    args: config.args,
                    onChange: (args) => url.updateControl({ type: config.type, args }),
                });
            default:
                throw new Error("Invalid control type");
        }
    };
}
export function factory() {
    const s = state();
    const u = url();
    const add = init(u, s);
    const controls = document.getElementById("controls");
    const factory = document.getElementById("factory");
    assert(controls, "#controls element was not wound");
    const canvas = initFullScreenCanvas({
        id: "canvas",
        backgroundCollor: "rgba(43, 42, 42, 0.01)",
    });
    const a = animation({
        canvas,
        outputs: s.outputs,
    });
    defaults(s.values, canvas.ctx);
    u.eachControl((c) => add(c, true));
    if (!u.areControlsVisible()) {
        controls.classList.add("hidden");
        factory?.classList.add("hidden");
        canvas.ctx.canvas.classList.add("fill");
    }
    render({
        animation: a,
        vals: s.values,
        add,
        canvas,
    });
    initEvents({
        fullScreenTarget: canvas.ctx.canvas,
        toggleVisibility: () => {
            controls.classList.toggle("hidden");
            factory?.classList.toggle("hidden");
            canvas.ctx.canvas.classList.toggle("fill");
            u.toggleVisibility();
        },
    });
    a.play();
}
