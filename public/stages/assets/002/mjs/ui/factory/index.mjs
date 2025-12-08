import { controls } from "./controls.mjs";
import { canvas } from "./canvas.mjs";
import { assert } from "../../utils.mjs";
import { divider } from "../common/divider.mjs";
import { playback } from "./playback.mjs";
export function render(args) {
    const container = document.getElementById("factory");
    assert(container instanceof HTMLDivElement, "#factory element was not found");
    playback({
        animation: args.animation,
        container,
    });
    controls({
        container,
        add: args.add,
    });
    canvas({
        container,
        canvas: args.canvas,
    });
    divider({ container });
    const link = document.createElement("a");
    link.href = "https://github.com/Lurk/stages/blob/main/readme.md";
    link.textContent = "?";
    container.appendChild(link);
}
