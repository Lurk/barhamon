export function assert(lhs, message) {
    if (!lhs) {
        alert(message);
        throw new Error(message);
    }
}
export function limiter(limit, cb) {
    let lastVal = "";
    let lastTime = Date.now();
    let timeout = undefined;
    return (val) => {
        const since = Date.now() - lastTime;
        if (lastVal !== val && since > limit) {
            cb(val);
            lastVal = val;
            lastTime = Date.now();
            if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
            }
        }
        else if (lastVal !== val && timeout === undefined) {
            lastVal = val;
            timeout = setTimeout(() => {
                lastTime = Date.now();
                timeout = undefined;
                cb(val);
            }, limit - since);
        }
    };
}
export function toISOTime(date) {
    const offset = date.getTimezoneOffset();
    return new Date(date.getTime() - offset * 60 * 1000).toISOString();
}
export const serialize = (val) => {
    if (typeof val === "number") {
        return `N${val.toString().length ?? 1}.${val}`;
    }
    else if (typeof val === "string") {
        return `S${val.length}.${val}`;
    }
    else if (val === undefined) {
        return `N1.0`;
    }
    else {
        throw new Error(`Unknown type: ${typeof val}`);
    }
};
function parseLength(val, start) {
    const separator = val.indexOf(".", start);
    assert(separator !== -1, `Unable to find the separator in: "${val}"\nstart: ${start}`);
    const len = parseInt(val.slice(start, separator), 10);
    assert(!Number.isNaN(len), `Unable to parse the len from: "${val.slice(start, separator)}"\nstart: ${start}\nseparator: ${separator}\nval: ${val}`);
    return [separator + 1, separator + len + 1];
}
export const deserialize = (val, start) => {
    if (val[start] === "N") {
        const [s, e] = parseLength(val, start + 1);
        const num = parseFloat(val.slice(s, e));
        assert(!Number.isNaN(num), `Unable to parse the number from: "${val}"`);
        return { val: num, end: e };
    }
    else if (val[start] === "S") {
        const [s, e] = parseLength(val, start + 1);
        return { val: val.slice(s, e), end: e };
    }
    // handle v.001 format
    const [s, e] = parseLength(val, start);
    return { val: val.slice(s, e), end: e };
};
