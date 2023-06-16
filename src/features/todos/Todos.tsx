import { useState } from "react";

export default function Todos(): JSX.Element {
    const [todo, setTodo] = useState<string>('');
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
            <button type="submit">Add</button>
        </>
    );
};
