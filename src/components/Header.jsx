import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <ul className="nav d-flex justify-content-center gap-5  ">
        <li>
          <NavLink to="/" className="myList major-mono-display-regular">
            Homepage
          </NavLink>
        </li>

        <li>
          <NavLink to="/Book" className="myList major-mono-display-regular">
            Book
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ContactUs"
            className="myList major-mono-display-regular"
          >
            Contact us
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className="myList major-mono-display-regular">
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
