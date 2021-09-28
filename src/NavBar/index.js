import { NavLink } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import "./style.css";

function NavBar() {
  return (
    <div className="header">
      <NavLink to="/landing">
        <Avatar src="/eznft-logo.png" alt="EZNFT Home" />
      </NavLink>
    </div>
  );
}

export default NavBar;
