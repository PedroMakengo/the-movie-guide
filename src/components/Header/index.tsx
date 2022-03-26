import { Link } from "react-router-dom";

import logo from "../../assets/logo/logo.svg";

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>
        <Link to="/">Movies</Link>
        <Link to="/popular-persons">People</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <input type="text" placeholder="Search a title" />
    </header>
  );
}

export default Header;
