import Router from "./router/Router";
import "./App.css";
import { NavLink } from "react-router";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/">home</NavLink>
          <NavLink to="/about">about</NavLink>
        </ul>
      </nav>

      <Router />
    </div>
  );
}

export default App;
