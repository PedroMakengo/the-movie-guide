import styled from "styled-components";

export const Header = styled.header`
  margin: 0;
  padding: 0;
  background: #171717;
  height: 13vh;

  .logo {
    width: 23%;
    img {
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  max-width: 70rem;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  a {
    margin-right: 2rem;
    color: #00df5e;
    text-decoration: none;
  }
  input {
    margin-left: 2rem;
    width: 300px;
    height: 30px;
    padding: 10px;
  }
`;
