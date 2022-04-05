import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContainerPopular, ListFilms, BannerMovie, Content } from "./styles";

// Preciso definir
const API_KEY = "a90d2e092e8721ef7b2eb3a1385a0df6";
const API_BASE = "https://api.themoviedb.org/3";

function PopularFilms() {
  const [movie, setMovie] = useState<[] | null>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${API_BASE}/discover/movie/?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      );
      const data = await response.json();

      setMovie(data.results);
      setLoading(false);
      console.log(data.results);
    })();
  }, []);

  if (loading) return <p>Loadding</p>;
  if (movie === null) return null;
  return (
    <ContainerPopular>
      <h2>Popular Films This Week</h2>

      <ListFilms>
        {movie.map((item: any) => (
          <Link
            key={item.id}
            to={`/movie-details/${item.original_title}`}
            className="movie"
          >
            <BannerMovie
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w300/${item.backdrop_path})`,
              }}
            />
            <Content>
              <h3>{item.title}</h3>
              <span>{item.release_date}</span>
            </Content>
          </Link>
        ))}
      </ListFilms>
    </ContainerPopular>
  );
}

export default PopularFilms;
