import { PLAYER_1, PLAYER_2, SYSTEM } from "@rcade/plugin-input-classic";

window.setInterval(() => {
    if (PLAYER_1.DPAD.up) {
        window.dispatchEvent(new KeyboardEvent("keydown", {
            key: "w",
            code: "keyW",
            bubbles: true
        }))
    }
}, )