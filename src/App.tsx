import './App.css';
import Counter from './features/counter/Counter';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Login from './features/auth/Login';
import { Link, Route, Routes } from 'react-router-dom';
import Todos from './features/todos/Todos';

function App() {
  const value = useSelector((state: RootState) => state.counter.value);
  const user = useSelector((state: RootState) => state.auth.login);

  return (
    <div className="App">
      <h1>Ваш счет: {value}</h1>
      <Counter />
      {user && <h2>Hello {user}</h2>}
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/counter">Counter</Link>
      </nav>
      <Login />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/todos" element={<Todos/>} />
      </Routes>
    </div>
  );
}

export default App;
