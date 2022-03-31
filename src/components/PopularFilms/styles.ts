import styled from "styled-components";

export const ContainerPopular = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding-top: 1rem;

  h2 {
    color: #00df5e;
  }
`;

export const ListFilms = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const Movie = styled.div`
  width: 200px;
  height: auto;
`;

export const Content = styled.div`
  width: 100%;
  height: 15vh;
  margin-top: 1rem;
  color: #fff;

  h3 {
    font-weight: 500;
  }

  span {
    font-weight: 300;
  }
`;

export const BannerMovie = styled.div`
  width: 200px;
  height: 264px;
  background: #171717;
  border-radius: 4px;
  margin-top: 2rem;
`;
