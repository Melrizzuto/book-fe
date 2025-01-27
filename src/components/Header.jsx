import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="Header">
      <ul className="nav d-flex justify-content-center gap-5  ">
        <li>
          <NavLink
            to="/books"
            className="headerNavLink  major-mono-display-regular headerNavLink "
          >
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="headerNavLink major-mono-display-regular"
          >
            Contact us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="headerNavLink  major-mono-display-regular"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/form"
            className="headerNavLink  major-mono-display-regular"
          >
            Form
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
