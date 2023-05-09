import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';


const defaultTodos = [
  {text: 'cortar cebolla', completed:true},
  {text: 'Tomar el Curso de Intro a React', completed:false},
  {text: 'llorar con la llorona', completed:false},
  {text: 'lalalalalal', completed:false}
];
function App() {
  return (
    <React.Fragment>

    
      <TodoCounter completed={16} total={25} />

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

    </React.Fragment>
  );
}



export default App;
