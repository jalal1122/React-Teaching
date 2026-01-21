import Router from "./router/Router";
import "./index.css";
import { NavLink } from "react-router";

function App() {
  return (
    <div className="mx-auto w-full">
      <nav>
        <ul className="flex gap-5 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-blue-300"
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-blue-300"
              }
            >
              about
            </NavLink>
          </li>
        </ul>
      </nav>

      <Router />
    </div>
  );
}

export default App;
