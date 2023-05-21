import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Imagendelaniña } from '../Imagendelaniña/Imagendelaniña';
import React from 'react';
import './App.css'



const defaultTodos = [
  {text: 'cortar cebolla', completed:true},
  {text: 'Tomar el Curso de Intro a React', completed:false},
  {text: 'llorar con la llorona', completed:false},
  {text: 'lalalalalal', completed:false},
  {text: 'amar a mi hija', completed:true}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue]=React.useState("");

  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;

  const searchedTodos = todos.filter(
    (todo)=>{
      const todoText= todo.text.toLowerCase();
      const searchText= searchValue.toLowerCase()
      return todoText.includes(searchText);
    }
  )




  const completeTodos = (text)=>{
      const newTodos = [...todos];
      const todoIndex=newTodos.findIndex(
        (todo)=>todo.text === text
      );
      newTodos[todoIndex].completed = true;
      setTodos(newTodos);
      ;}
  const deleteTodos = (text)=>{
      const newTodos = [...todos];
      const todoIndex=newTodos.findIndex(
        (todo)=>todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      setTodos(newTodos);
      ;}


    

  return (
    < >

      <div id='menuapp'>
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue }
      />


      <TodoList id="menuprincipal"> 
        {searchedTodos.map(({ text, completed }, index) =>(
          <TodoItem 
            key={index}
            text={text}
            completed={completed} 
            onComplete={()=>completeTodos(text)}
            onDelete={()=>deleteTodos(text)}
            />
        ))}
      </TodoList>
      <CreateTodoButton/>
      </div>

      <Imagendelaniña/>


    </>
  );
}



export default App;
