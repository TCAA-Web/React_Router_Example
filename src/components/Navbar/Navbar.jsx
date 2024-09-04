import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

export function Navbar() {
  // Vores Navbar som indeholder NavLink komponenter. Navlink skal altid have en "to=" som er den sti der tilføjes til url´en når man klikker på den
  // Derudover har NavLink en "isActive" prop som vi kan bruge til at måle om linket er aktivt.
  return (
    <nav className={style.navbarStyle}>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "black" }
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "black" }
            }
            to={"/about"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "black" }
            }
            to={"/blogs"}
          >
            Blogs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
