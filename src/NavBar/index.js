import { NavLink } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <div class="header">
      <NavLink to="/landing">Home</NavLink>
      <NavLink to="/addartwork">Add Work</NavLink>
      <NavLink to="/test">Damian Test</NavLink>
    </div>
  );
}

export default NavBar;
