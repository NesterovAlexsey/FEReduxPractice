import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Action from "./types/Action";
import { RootState } from "../../store";

export default function Todos(): JSX.Element {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState<string>('');
    const value = useSelector((globalState: RootState) => globalState.todo);

    return (
        <>
            <div>Todos</div>
            <input
                type="text"
                value={todo}
                required
                placeholder="What to do?"
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="button"
                onClick={() => dispatch<Action>({type: 'addTask', payload: 'hey' })}>
                Add
            </button>
            <button
                type="button"
                onClick={() => dispatch<Action>({type: 'deleteTask', payload: "" })}>
                Delete
            </button>
            <p>{value}</p>
        </>
    );
};
