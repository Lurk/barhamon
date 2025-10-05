import { renderSelectInputTo } from "../common/select.mjs";
import { divider } from "../common/divider.mjs";
export function canvas({ canvas, container }) {
    divider({ container });
    const { select: { el: aspectRatio }, } = renderSelectInputTo({
        container,
        options: ["free", "16:9", "5:4", "4:3", "2:1", "1:1"],
        id: "aspect",
        label: "aspect:",
    });
    const { select: { el: orientation }, } = renderSelectInputTo({
        container,
        options: ["horizontal", "vertical"],
        id: "orient",
        label: "orientation:",
        disabled: true,
    });
    const { select: { el: longSide }, label, } = renderSelectInputTo({
        container,
        options: ["3840", "1920", "1280", "720"],
        selected: "1920",
        id: "long-side",
        label: "width",
        disabled: true,
    });
    const changeCanvasSize = () => {
        const ar = aspectRatio.value;
        const ls = parseInt(longSide.value);
        const o = orientation.value;
        const shortSide = Math.round((ls / parseInt(ar.split(":")[0])) * parseInt(ar.split(":")[1]));
        if (o === "horizontal") {
            label("width");
            canvas.resize(ls, shortSide);
        }
        else {
            label("height");
            canvas.resize(shortSide, ls);
        }
    };
    aspectRatio.addEventListener("change", () => {
        if (aspectRatio.value === "free") {
            longSide.disabled = true;
            orientation.disabled = true;
            canvas.resizeToFit();
        }
        else {
            longSide.disabled = false;
            orientation.disabled = false;
            changeCanvasSize();
        }
    });
    longSide.addEventListener("change", changeCanvasSize);
    orientation.addEventListener("change", changeCanvasSize);
}
