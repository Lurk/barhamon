export function spanWithText(container, text) {
    const span = document.createElement("span");
    span.innerText = text;
    container.appendChild(span);
    return (text) => {
        span.innerText = text;
    };
}
