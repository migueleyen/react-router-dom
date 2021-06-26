import { NavLink } from "react-router-dom";
import { useAuthContext } from "./AuthProvider.V19";

export default function NavBar() {
  const auth = useAuthContext();
  return (
    // nav>ul>li*3>NavLink[to='/' activeClassName='active']
    <nav>
      <ul>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="active">
            Register
          </NavLink>
        </li>
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
        <li>
          <button onClick={() => auth.logout()}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
