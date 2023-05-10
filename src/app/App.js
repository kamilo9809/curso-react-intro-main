import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import './App.css'



const defaultTodos = [
  {text: 'cortar cebolla', completed:true},
  {text: 'Tomar el Curso de Intro a React', completed:false},
  {text: 'llorar con la llorona', completed:false},
  {text: 'lalalalalal', completed:false}
];
function App() {
  return (
    <>

      <div id='menuapp'>
      <TodoCounter completed={16} total={25}/>

      <TodoSearch/>

      <TodoList> 
        {defaultTodos.map(todo =>(
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed} />
        ))}
        {[<TodoList/>]}
      </TodoList>
      <CreateTodoButton/>
      </div>


    </>
  );
}



export default App;
