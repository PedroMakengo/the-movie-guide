import { Link } from "react-router-dom";

import logo from "../../assets/logo/logo.svg";
import LinkNavegate from "../LinkNavegate";

import { Header as ContentHeader, Container, Nav } from "./style";

const arrayLinkNavegate = [
  { id: 1, to: "/", route: "Movies" },
  { id: 2, to: "/popular-persons", route: "People" },
  { id: 3, to: "/profile", route: "Profile" },
];

function Header() {
  return (
    <ContentHeader>
      <Container>
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
        <Nav>
          {arrayLinkNavegate.map(({ id, to, route }) => (
            <LinkNavegate key={id} to={to}>
              {route}
            </LinkNavegate>
          ))}
          <input type="text" placeholder="Search a title" />
        </Nav>
      </Container>
    </ContentHeader>
  );
}

export default Header;
