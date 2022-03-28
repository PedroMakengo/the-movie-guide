import { useParams } from "react-router-dom";
import Head from "../components/Head";

function MovieDetails() {
  const { id } = useParams();

  return (
    <main>
      <Head title="Movie Details" description="Testando" />
      <h1>MovieDetails {id}</h1>
    </main>
  );
}

export default MovieDetails;
