import { renderContainer } from "./common/container.mjs";
import { controls } from "./factory/controls.mjs";
import { canvas } from "./factory/canvas.mjs";
export function render(args) {
    const { container } = renderContainer("factory");
    controls({
        container,
        add: args.add,
    });
    canvas({
        container,
        canvas: args.canvas,
        recorder: args.recorder,
    });
    const docs = document.createElement("div");
    docs.classList.add("docs");
    const link = document.createElement("a");
    link.href = "https://github.com/Lurk/stages/blob/main/readme.md";
    link.textContent = "documentation";
    docs.appendChild(link);
    container.parentNode?.appendChild(docs);
}
