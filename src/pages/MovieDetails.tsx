import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Head from "../components/Head";

const API_KEY = "a90d2e092e8721ef7b2eb3a1385a0df6";
const API_BASE = "https://api.themoviedb.org/3";

function MovieDetails() {
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${API_BASE}/trending/all/week?language=pt-BR&api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
    })();
  }, [id]);

  return (
    <main>
      <Head title="Movie Details" description="Testando" />
      <h1>MovieDetails {id}</h1>
    </main>
  );
}

export default MovieDetails;
