import { factory } from "./factory.mjs";
factory();
window.onerror = (e) => {
    alert(`press browser back (works as undo) to fix the error: ${e}`);
};
