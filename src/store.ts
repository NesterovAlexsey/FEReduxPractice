import { combineReducers, createStore } from "redux";
import counterReducer from "./features/counter/counterReducer";
import authReducer from "./features/auth/authReducer";

const store = createStore(combineReducers({
    counter: counterReducer,
    auth: authReducer
}))

export default store

export type RootState = ReturnType<typeof store.getState>
