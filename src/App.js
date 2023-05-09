import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import './App.css';

function App() {
  return (
    <div className="App">

      <HolaPrro/>
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      {/*<createTodoButton/>*/}
    </div>
  );
}

function HolaPrro(){
  return(
    <h1>Esto es un ejemplo de lo que estoy haciendo</h1>
  );
}

export default App;
