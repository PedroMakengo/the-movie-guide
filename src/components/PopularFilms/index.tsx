import { ContainerPopular, ListFilms, Movie } from "./styles";

function PopularFilms() {
  return (
    <ContainerPopular>
      <h2>Popular Films This Week</h2>

      <ListFilms>
        <Movie>
          <h1>Filme 1</h1>
        </Movie>
      </ListFilms>
    </ContainerPopular>
  );
}

export default PopularFilms;
