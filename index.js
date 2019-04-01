/** Initializing state and store */
const INITIAL_STATE = {face: "♡´･ᴗ･`♡"};


const FACES = {
    happy: "♡´･ᴗ･`♡",
    love: "♥(ˆ⌣ˆԅ)",
    sad: "(╥_╥)",
    sleepy: "꒰◍ᐡᐤᐡ◍꒱"
}

function moodReducer() {
    if (action.type === "HAPPY") {
        return { ...state, face: "♡´･ᴗ･`♡" };
    } else if (action.type === "LOVE") {
        return { ...state, face: "♥(ˆ⌣ˆԅ)" };
    } else if (action.type === "SAD") {
        return { ...state, face: "(╥_╥)" };
    } else if (action.type === "SLEEPY") {
        return { ...state, face: "꒰◍ᐡᐤᐡ◍꒱" };
    }
    return state;
}

const store = Redux.createStore(moodReducer);
