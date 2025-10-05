export function button({ text, container, onClick, onHold, disabled, }) {
    const el = document.createElement("button");
    el.textContent = text;
    if (onClick) {
        el.addEventListener("click", onClick);
    }
    if (onHold) {
        let interval = 300;
        let timeoutIdId = null;
        const wrap = () => {
            onHold();
            interval = Math.max(25, interval - 10);
            timeoutIdId = setTimeout(wrap, interval);
        };
        el.addEventListener("mousedown", () => {
            wrap();
        });
        el.addEventListener("mouseup", () => {
            if (timeoutIdId !== null) {
                clearTimeout(timeoutIdId);
                timeoutIdId = null;
            }
            interval = 300;
        });
    }
    el.disabled = disabled ?? false;
    container.appendChild(el);
    return {
        setText: (text) => {
            el.textContent = text;
        },
        toggleDisabled: (force) => {
            el.disabled = force ?? !el.disabled;
        },
    };
}
