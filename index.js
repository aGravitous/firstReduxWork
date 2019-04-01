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
    
    function updateUI() {
        const newFace = store.getState().face;
        faceElement.innerText = newFace;
    }

    document.getElementById("happy").addEventListener("click", function() {
        store.dispatch({type: "HAPPY"});
    });

    document.getElementById("love").addEventListener("click", function() {
        store.dispatch({type: "LOVE"});
    });

    document.getElementById("sad").addEventListener("click", function() {
        store.dispatch({type: "SAD"});
    });

    document.getElementById("sleepy").addEventListener("click", function() {
        store.dispatch({type: "SLEEPY"});
    });

    store.subscribe(updateUI);
}