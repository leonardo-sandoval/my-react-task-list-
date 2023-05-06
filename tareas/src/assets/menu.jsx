import { NavLink } from "react-router-dom";
import "../assets/menu.css";

export default function Navbar() {
  return (
    <div >
      <header class="header">
        <a href="#" class="logo">Task</a>
        <input type="checkbox" id="side-menu" class="side-menu"/>
        <label for="side-menu" class="hamb"><span class="hamb-line"></span></label>
        <nav class="nav">
            <ul class="menu">
            <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tareas"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Tareas
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/SobreNosotros"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Nosotros 
          </NavLink>
        </li>
            </ul>
        </nav>
    </header>
    </div>
  );
}