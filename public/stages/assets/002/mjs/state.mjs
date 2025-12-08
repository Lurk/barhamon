import { outputs } from "./output.mjs";
import { values } from "./value.mjs";
export function state() {
    return {
        values: values(),
        outputs: outputs(),
        colors: values(),
    };
}
