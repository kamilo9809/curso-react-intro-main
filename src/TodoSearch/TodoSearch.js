import './TodoSearch.css'
import searchIcon from '../image/search-svgrepo-com.png'


function TodoSearch({
    searchValue,
    setSearchValue
}){

    return (
        <div id='hola'>
        <input 
            id='inputTodo'
            value={searchValue}
            placeholder="Buscar un Todo"
            onChange={
                (event)=>{
                    setSearchValue(event.target.value)
                }}
            style={{
                backgroundImage: `url( ${searchIcon})`,
                backgroundSize: "40px",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '10px',
                paddingLeft: '40px',
            }}
            />
        </div       >
    );
  }

  export {TodoSearch};