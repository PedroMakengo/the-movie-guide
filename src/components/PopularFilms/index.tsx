import {
  ContainerPopular,
  ListFilms,
  Movie,
  BannerMovie,
  Content,
} from "./styles";

function PopularFilms() {
  return (
    <ContainerPopular>
      <h2>Popular Films This Week</h2>

      <ListFilms>
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
      </ListFilms>
    </ContainerPopular>
  );
}

export default PopularFilms;
