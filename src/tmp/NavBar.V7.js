import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    // nav>ul>li*3>a[href='/']
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
