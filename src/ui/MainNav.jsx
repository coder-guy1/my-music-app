import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <li>
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
        <NavLink to="/search">
          <span>Search</span>
        </NavLink>
        <NavLink to="/playlist">
          <span>Your Library</span>
        </NavLink>
      </li>
    </nav>
  );
}
export default MainNav;
