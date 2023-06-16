import Action from "./types/Action";
import TodoState from "./types/TodoState";

const initialState: TodoState = {
    value: "",
};

export default function todoReducer(state: TodoState, action: Action): TodoState {
    switch (action.type) {
        case 'addTask':
            return { ...state, value: state.value + action.payload };
        case 'addTask':
            return { ...state, value: state.value = action.payload };
        default: return state;
    };
};
