import { NavLink } from "react-router-dom";
import { _addTodo } from "./api/api";

function App() {
  //add some sample todos to preview:
  if(!localStorage.getItem('todos'))
    for(let i=0; i<4; i++)
      _addTodo({title:`item ${i+1}`,description:'Lorem ipsum is placeholder text commonly used in the graphic, print.'})
  return (
      <header style={{ display: 'flex', alignItems: 'center',flexWrap:'wrap', margin: '20px 10px' }}>
        <h1 style={{ marginRight: 'auto' }}>Todo App</h1>
        <nav className='navbar navbar-expand'>
          <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink className='nav-link' to="/add-todo">Add Todo</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className='nav-link' to="/todos">Todos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default App;
