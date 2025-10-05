import { CONTROL_TYPES, controlTypeGuard, } from "../controls/factory.mjs";
import { renderControl, renderSelectInputTo, renderTextInputTo, } from "../utils.mjs";
export function render(args) {
    const { container } = renderControl("factory");
    const nameInput = renderTextInputTo({
        label: "name:",
        container,
    });
    const { el: controlTypeSelect } = renderSelectInputTo({
        container,
        options: CONTROL_TYPES,
        id: "control-creation-select",
        label: "type:",
    });
    const createButton = document.createElement("button");
    createButton.textContent = "Create Control";
    container.appendChild(createButton);
    createButton.addEventListener("click", () => {
        const type = controlTypeSelect.value;
        const name = nameInput.value.trim();
        if (!controlTypeGuard(type)) {
            alert("Invalid control type");
            return;
        }
        args.add({ type, args: { name } });
        nameInput.value = "";
    });
    const rec = document.createElement("button");
    rec.textContent = args.recorder.state() === "inactive" ? "record" : "stop";
    args.recorder.subscribe((state) => {
        rec.textContent = state === "inactive" ? "record" : "stop";
    });
    container.appendChild(rec);
    rec.addEventListener("click", () => {
        if (args.recorder.state() === "inactive") {
            args.recorder.start();
        }
        else {
            args.recorder.stop();
        }
    });
    const docs = document.createElement("div");
    docs.classList.add("docs");
    const link = document.createElement("a");
    link.href = "/post/stages.html#Documentation.";
    link.textContent = "documentation";
    docs.appendChild(link);
    container.parentNode?.appendChild(docs);
}
