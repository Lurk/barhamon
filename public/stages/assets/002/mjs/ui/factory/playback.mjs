import { button } from "../common/button.mjs";
import { spanWithText } from "../common/span.mjs";
import { divider } from "../common/divider.mjs";
export function playback({ container, animation }) {
    const now = spanWithText(container, "0");
    animation.onFrameSubscribe((time) => {
        now(time.toFixed(0));
    });
    divider({ container });
    const backButton = button({
        text: "◀◀",
        container,
        disabled: true,
        onHold: () => {
            animation.backward();
        },
    });
    const play = () => {
        if (animation.getState() === "playing") {
            animation.pause();
        }
        else {
            animation.play();
        }
    };
    const playButton = button({
        text: animation.getState() ? "⏸" : "▶",
        container,
        onClick: play,
    });
    const forwardButton = button({
        text: "▶▶",
        container,
        disabled: true,
        onHold: () => {
            animation.forward();
        },
    });
    const recButton = button({
        text: animation.getState() === "recording" ? "●" : "◼",
        container,
        onClick: () => {
            if (animation.getState() === "paused") {
                animation.record();
            }
            else {
                animation.pause();
            }
        },
    });
    const screenshotButton = button({
        text: "✴",
        container,
        onClick: () => {
            animation.screenshot();
        },
    });
    animation.onStateChangeSubscribe((state) => {
        switch (state) {
            case "playing":
                playButton.setText("⏸");
                backButton.toggleDisabled(true);
                forwardButton.toggleDisabled(true);
                recButton.toggleDisabled(true);
                screenshotButton.toggleDisabled(false);
                break;
            case "paused":
                playButton.setText("▶");
                backButton.toggleDisabled(false);
                forwardButton.toggleDisabled(false);
                recButton.toggleDisabled(false);
                screenshotButton.toggleDisabled(false);
                playButton.toggleDisabled(false);
                break;
            case "recording":
                recButton.setText("◼");
                playButton.toggleDisabled(true);
                backButton.toggleDisabled(true);
                forwardButton.toggleDisabled(true);
                screenshotButton.toggleDisabled(true);
                break;
        }
    });
}
