import { Link } from "react-router-dom";

import logo from "../../assets/logo/logo.svg";
import LinkNavegate from "../LinkNavegate";

import { Header as ContentHeader } from "./style";

const arrayLinkNavegate = [
  { id: 1, to: "/", route: "Movies" },
  { id: 2, to: "/popular-persons", route: "People" },
  { id: 3, to: "/profile", route: "Profile" },
];

function Header() {
  return (
    <ContentHeader>
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <nav>
        {arrayLinkNavegate.map(({ id, to, route }) => (
          <LinkNavegate key={id} to={to}>
            {route}
          </LinkNavegate>
        ))}
      </nav>
      <input type="text" placeholder="Search a title" />
    </ContentHeader>
  );
}

export default Header;
