// import { TodoCounter } from '../TodoCounter/TodoCounter';
// import { TodoSearch } from '../TodoSearch/TodoSearch';
// import { TodoList } from '../TodoList/TodoList';
// import { TodoItem } from '../TodoItem/TodoItem';
// import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
// import { Imagendelaniña } from '../Imagendelaniña/Imagendelaniña';
// import React from 'react';
// import './App.css'



// // const defaultTodos = [
// //   {text: 'cortar cebolla', completed:true},
// //   {text: 'Tomar el Curso de Intro a React', completed:false},
// //   {text: 'llorar con la llorona', completed:false},
// //   {text: 'lalalalalal', completed:false},
// //   {text: 'amar a mi hija', completed:true}
// // ];


// // localStorage.setItem("Todos_V1", JSON.stringify(defaultTodos));

// //localStorage.removeItem("Todos_V1,");




// function App() {
//   const localStorageTodos = localStorage.getItem("Todos_V1");
//   let parsedTodos;

//   if(!localStorageTodos){
//     localStorage.setItem("Todos_V1", JSON.stringify([]));
//     parsedTodos = [];
//   }else{
//     parsedTodos=JSON.parse(localStorageTodos);

//   }


//   const [todos, setTodos] = React.useState(parsedTodos);
//   const [searchValue, setSearchValue]=React.useState("");

//   const completedTodos = todos.filter(todo=>!!todo.completed).length;
//   const totalTodos=todos.length;

//   const searchedTodos = todos.filter(
//     (todo)=>{
//       const todoText= todo.text.toLowerCase();
//       const searchText= searchValue.toLowerCase()
//       return todoText.includes(searchText);
//     }
//   )

//   const saveTodos = (newTodos)=>{
//     localStorage.setItem("Todos_V1", JSON.stringify(newTodos))
//     setTodos(newTodos);
//   };

//   const completeTodos = (text)=>{
//       const newTodos = [...todos];
//       const todoIndex=newTodos.findIndex(
//         (todo)=>todo.text === text
//       );
//       newTodos[todoIndex].completed = true;
//       saveTodos(newTodos);
//       ;}
//   const deleteTodos = (text)=>{
//       const newTodos = [...todos];
//       const todoIndex=newTodos.findIndex(
//         (todo)=>todo.text === text
//       );
//       newTodos.splice(todoIndex, 1);
//       saveTodos(newTodos);
//       ;}


    

//   return (
//     < >

//       <div id='menuapp'>
//       <TodoCounter 
//       completed={completedTodos} 
//       total={totalTodos}
//       />

//       <TodoSearch
//         searchValue={searchValue}
//         setSearchValue={setSearchValue }
//       />


//       <TodoList id="menuprincipal"> 
//         {searchedTodos.map(({ text, completed }, index) =>(
//           <TodoItem 
//             key={index}
//             text={text}
//             completed={completed} 
//             onComplete={()=>completeTodos(text)}
//             onDelete={()=>deleteTodos(text)}
//             />
//         ))}
//       </TodoList>
//       <CreateTodoButton/>
//       </div>

//       <Imagendelaniña/>


//     </>
//   );
// }



// export default App;