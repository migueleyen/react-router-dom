import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    // nav>ul>li*3>NavLink[to='/' activeClassName='active']
    <nav>
      <ul>
        <li>
          <NavLink to="/payment" activeClassName="active">
            Payments
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" activeClassName="active">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
