import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { MenuPTodo } from '../MenuPTodo/MenuPTodo';
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


      <MenuPTodo id="menuTodo">
      </MenuPTodo>
      <TodoList> 
        {defaultTodos.map(({ text, completed }) =>(
          <TodoItem 
            key={text}
            text={text}
            completed={completed} />
        ))}
        {[<TodoList/>]}
      </TodoList>
      <CreateTodoButton/>


      <completedTodo id="completeTodo">

      </completedTodo>



      <deletedTodo id="deletedTodo">

      </deletedTodo>


      </div>



    </>
  );
}



export default App;
