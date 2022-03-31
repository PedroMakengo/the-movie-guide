import { useState, useEffect } from "react";
import {
  ContainerPopular,
  ListFilms,
  Movie,
  BannerMovie,
  Content,
} from "./styles";

// Preciso definir
const API_KEY = "a90d2e092e8721ef7b2eb3a1385a0df6";
const API_BASE = "https://api.themoviedb.org/3";

function PopularFilms() {
  const [movie, setMovie] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${API_BASE}/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
      );
      const json = await response.json();
      setMovie(json);
      console.log(movie.results);
    })();
  }, []);

  if (movie === null) return null;
  return (
    <ContainerPopular>
      <h2>Popular Films This Week</h2>

      <ListFilms>
        {movie.results.map((item: any) => (
          <Movie key={item}>
            <BannerMovie
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w300/${item.backdrop_path})`,
              }}
            />
            <Content>
              <h3>{item.name}</h3>
              <span>{item.first_air_date}</span>
            </Content>
          </Movie>
        ))}
      </ListFilms>
    </ContainerPopular>
  );
}

export default PopularFilms;
