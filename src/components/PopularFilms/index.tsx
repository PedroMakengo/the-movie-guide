import { useState } from "react";
import {
  ContainerPopular,
  ListFilms,
  Movie,
  BannerMovie,
  Content,
} from "./styles";

function PopularFilms() {
  const [movie, setMovie] = useState<[] | true>(true);
  const [loading, setLoading] = useState(false);

  if (movie === null) return null;
  if (loading) return <p>Processando</p>;
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
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
        <Movie>
          <BannerMovie />
          <Content>
            <h3>Filme 1</h3>
            <span>Trabalhando</span>
          </Content>
        </Movie>
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
