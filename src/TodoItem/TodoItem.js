import './TodoItem.css'

function TodoItem(props){
    return (
      <li>
        <span> <button><svg width="35px" height="35px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linejoin="round"></path> <path d="M16 24L22 30L34 18" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button> </span>
        <p>{props.text}</p>
        <span><button>x</button></span> 
      </li>
    );
  }

  export{TodoItem}