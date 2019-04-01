/** Initializing state and store */
const INITIAL_STATE = {face: "♡´･ᴗ･`♡"};

function moodReducer(state=INITIAL_STATE, action) {
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
};

const store = Redux.createStore(moodReducer);

window.onload = function() {
    const faceElement = document.getElementById("faces")
    const initialFace = store.getState().face;
    faceElement.innerText = initialFace;

    document.getElementById("happy").addEventListener("click", function() {
        store.dispatch({type: "HAPPY"});
        const newFace = store.getState().face;
        faceElement.innerText = newFace;
    });

    document.getElementById("love").addEventListener("click", function() {
        store.dispatch({type: "LOVE"});
        const newFace = store.getState().face;
        faceElement.innerText = newFace;
    });

    document.getElementById("sad").addEventListener("click", function() {
        store.dispatch({type: "SAD"});
        const newFace = store.getState().face;
        faceElement.innerText = newFace;
    });

    document.getElementById("sleepy").addEventListener("click", function() {
        store.dispatch({type: "SLEEPY"});
        const newFace = store.getState().face;
        faceElement.innerText = newFace;
    });
}