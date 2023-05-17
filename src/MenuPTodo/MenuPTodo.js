import './MenupTodo.css'

function MenuPTodo(){
    return(
        <div id="menuTodo">
            <button className='completedT'>Completado</button>
            <button className='MTodo'>Menu Todo</button>
            <button className='deletedT'>Eliminado</button>
        </div>
    );
}

export {MenuPTodo};