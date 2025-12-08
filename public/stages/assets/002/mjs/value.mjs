import { assert } from "./utils.mjs";
export function values() {
    const map = new Map();
    const onRegisterCallbacks = [];
    return {
        register(key, value) {
            if (map.has(key)) {
                alert("duplicate id");
            }
            else {
                map.set(key, value);
                const keys = this.keys();
                onRegisterCallbacks.forEach((fn) => fn(keys));
            }
        },
        unregister(key) {
            if (map.has(key)) {
                map.delete(key);
                const keys = this.keys();
                onRegisterCallbacks.forEach((fn) => fn(keys));
            }
        },
        get(key) {
            return map.get(key);
        },
        keys() {
            return [...map.keys()];
        },
        onChange(fn) {
            onRegisterCallbacks.push(fn);
        },
        unsubscribe(fn) {
            const index = onRegisterCallbacks.indexOf(fn);
            if (index > -1) {
                onRegisterCallbacks.splice(index, 1);
            }
        },
    };
}
export function getOneNumber(number) {
    assert(number.length === 1, `Expected array of length 1 but got ${number.length}`);
    return number[0];
}
export function getFourNumbers(number) {
    assert(number.length === 4, `Expected array of length 4 but got ${number.length}`);
    return number;
}
