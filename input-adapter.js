import { on } from "@rcade/input-classic";

// 1. Map the arcade buttons to the KeyboardEvent.code values your Godot game expects
const buttonToKeyMap = {
    "UP": "keyW",
    "DOWN": "keyS",
    "LEFT": "keyA",
    "RIGHT": "keyD",
    "A": "keyW",       // Example: Map Arcade 'A' to 'Z' key
    "B": "keyE",       // Example: Map Arcade 'B' to 'X' key
    "ONE_PLAYER": "Enter" 
};

// 2. Helper to trigger fake keyboard events for Godot to pick up
function simulateKeyEvent(eventName, keyCode) {
    const event = new KeyboardEvent(eventName, {
        code: keyCode,
        key: keyCode,
        bubbles: true,
        cancelable: true,
        composed: true
    });
    
    // Dispatch to document or your specific Godot <canvas> element
    document.dispatchEvent(event); 
}

// 3. Listen for Arcade inputs being pressed down
on("inputStart", (data) => {
    // Only mapping Player 1 for this example
    if (data.player === 1 || data.type === "system") {
        const mappedKey = buttonToKeyMap[data.button];
        if (mappedKey) {
            simulateKeyEvent("keydown", mappedKey);
        }
    }
});

// 4. Listen for Arcade inputs being released
on("inputEnd", (data) => {
    if (data.player === 1 || data.type === "system") {
        const mappedKey = buttonToKeyMap[data.button];
        if (mappedKey) {
            simulateKeyEvent("keyup", mappedKey);
        }
    }
});
