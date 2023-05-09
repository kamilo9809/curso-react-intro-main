const estilos = {
   backgroundColor: 'red'
}

function TodoCounter({total,completed}){
   
    return (
       <h1 style={estilos}>
        Has completado {completed} de {total} TODOs
       </h1>
    );
  }

  export {TodoCounter};