import './TodoSearch.css'


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
            />
            <svg width="50px" height="50px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M492.5 917.7c-247 0-447.9-200.9-447.9-447.9s200.9-448 447.9-448 447.9 200.9 447.9 447.9-200.9 448-447.9 448z m0-810.6c-200 0-362.6 162.7-362.6 362.6s162.7 362.6 362.6 362.6 362.6-162.7 362.6-362.6-162.6-362.6-362.6-362.6z" fill="#a6137d"></path><path d="M951.1 971c-10.9 0-21.8-4.2-30.2-12.5l-96-96c-16.7-16.7-16.7-43.7 0-60.3 16.6-16.7 43.7-16.7 60.3 0l96 96c16.7 16.7 16.7 43.7 0 60.3-8.2 8.4-19.2 12.5-30.1 12.5z" fill="#5F6379"></path></g></svg>
        </div       >
    );
  }

  export {TodoSearch};