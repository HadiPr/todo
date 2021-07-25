import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header style={{ display: 'flex', alignItems: 'center', margin: '20px 10px' }}>
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
    </div>
  );
}

export default App;
