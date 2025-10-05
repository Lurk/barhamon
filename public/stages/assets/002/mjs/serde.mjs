import { oscillatorSerde } from "./values/oscillator.mjs";
import { lineSerde } from "./outputs/line.mjs";
import { mathSerde } from "./values/math.mjs";
import { randomSerde } from "./values/random.mjs";
import { assert } from "./utils.mjs";
import { logicSerde } from "./values/logic.mjs";
import { sliderSerde } from "./values/slider.mjs";
import { mapSerde } from "./values/map.mjs";
import { colorSerde } from "./values/color.mjs";
import { boxSerde } from "./outputs/box.mjs";
import { circleSerde } from "./outputs/circle.mjs";
import { clockSerde } from "./values/clock.mjs";
import { seq8Serde } from "./values/seq8.mjs";
const VERSION = 2;
function typeToString(type) {
    switch (type) {
        case "slider":
            return "00";
        case "oscillator":
            return "01";
        case "line":
            return "02";
        case "math":
            return "03";
        case "random":
            return "04";
        case "logic":
            return "05";
        case "map":
            return "06";
        case "color":
            return "07";
        case "box":
            return "08";
        case "circle":
            return "09";
        case "clock":
            return "0A";
        case "seq8":
            return "0B";
        default:
            throw new Error(`Unknown type: ${type}`);
    }
}
function stringToType(type) {
    switch (type) {
        case "00":
            return "slider";
        case "01":
            return "oscillator";
        case "02":
            return "line";
        case "03":
            return "math";
        case "04":
            return "random";
        case "05":
            return "logic";
        case "06":
            return "map";
        case "07":
            return "color";
        case "08":
            return "box";
        case "09":
            return "circle";
        case "0A":
            return "clock";
        case "0B":
            return "seq8";
        default:
            throw new Error(`Unknown type: ${type}`);
    }
}
export function serde() {
    const sd = {
        slider: sliderSerde(),
        oscillator: oscillatorSerde(),
        line: lineSerde(),
        math: mathSerde(),
        random: randomSerde(),
        logic: logicSerde(),
        map: mapSerde(),
        color: colorSerde(),
        box: boxSerde(),
        circle: circleSerde(),
        clock: clockSerde(),
        seq8: seq8Serde(),
    };
    const controlToString = (control) => {
        const type = typeToString(control.type);
        const serde = sd[control.type];
        // @ts-expect-error
        return `${type}${serde.toString(control.args)}`;
    };
    return {
        toString(state) {
            const v = VERSION.toString(32).padStart(3, "0");
            const visibility = state.areControlsVisible ? "Y" : "N";
            const controls = [...state.controls.values()]
                .map(controlToString)
                .join("");
            return `${v}${visibility}${controls}`;
        },
        fromString(str) {
            if (str.length === 0) {
                return { controls: new Map(), areControlsVisible: true };
            }
            let pos = 0;
            const version = parseInt(str.slice(pos, pos + 3), 32);
            assert(version <= VERSION, `Version mismatch: ${version} >= ${VERSION}`);
            pos += 3;
            const visible = str[pos];
            assert(str[pos] === "Y" || str[pos] === "N", `Invalid visibility: ${visible}`);
            pos += 1;
            const controls = new Map();
            while (pos < str.length) {
                const type = stringToType(str.slice(pos, pos + 2));
                pos += 2;
                const { val, end } = sd[type].fromString(version, str, pos);
                controls.set(val.name, 
                // @ts-expect-error
                {
                    type,
                    args: val,
                });
                pos = end;
            }
            return {
                controls,
                areControlsVisible: visible === "Y",
            };
        },
    };
}
