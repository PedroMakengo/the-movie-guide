import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Head from "../components/Head";

const API_KEY = "a90d2e092e8721ef7b2eb3a1385a0df6";
const API_BASE = "https://api.themoviedb.org/3/search/";

function MovieDetails() {
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${API_BASE}multi?api_key=${API_KEY}&language=pt-BR&page=1&query=${id}`
      );
      const json = await response.json();
      setData(json.results);
      setLoading(false);
      console.log(data);
    })();
  }, [id]);

  if (loading && data.length === 0) return <p>Processando</p>;
  if (data.length === 0) return null;
  return (
    <main>
      <Head title="Movie Details" description="Testando" />
      <h1>MovieDetails {id}</h1>
    </main>
  );
}

export default MovieDetails;
