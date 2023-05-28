import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Imagendelaniña } from '../Imagendelaniña/Imagendelaniña';
import React from 'react';
import './App.css'



// const defaultTodos = [
//     {text: 'cortar cebolla', completed:true},
//     {text: 'Tomar el Curso de Intro a React', completed:false},
//     {text: 'llorar con la llorona', completed:false},
//     {text: 'lalalalalal', completed:false},
//     {text: 'amar a mi hija', completed:true},
//     {text: 'comer menos', completed:false},
//     {text: 'tener una mejor moto', completed:false},
//     {text: 'comprar mas frutas', completed:false},
//     {text: 'saludar siempre', completed:false},
//     {text: 'tener mejor ropa', completed:false},
//     {text: 'escuchar musica', completed:false},
//     {text: 'ir a la clase del profe bernardo', completed:false},
//     {text: 'completar todas las tareas', completed:false},
//   ];
  
  
//   localStorage.setItem("Todos_V1", JSON.stringify(defaultTodos));

//localStorage.removeItem("Todos_V1,");


function useLocalStorage(itemName, initialValue){
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if(!localStorageItem){
        localStorage.setItem("itemName", JSON.stringify(initialValue));
        parsedItem = initialValue;
    }else{
        parsedItem=JSON.parse(localStorageItem);
    }
    
    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem)=>{
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem);
    };
    return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('Todos_V1', []);
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
      saveTodos(newTodos);
      ;}
  const deleteTodos = (text)=>{
      const newTodos = [...todos];
      const todoIndex=newTodos.findIndex(
        (todo)=>todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
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