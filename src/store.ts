import { combineReducers, createStore } from "redux";
import counterReducer from "./features/counter/counterReducer";
import authReducer from "./features/auth/authReducer";
import todoReducer from "./features/todos/todoReducer";

const store = createStore(combineReducers({
    counter: counterReducer,
    auth: authReducer,
    todo: todoReducer
}))

export default store

export type RootState = ReturnType<typeof store.getState>
