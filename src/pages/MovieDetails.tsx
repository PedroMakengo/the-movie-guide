import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>MovieDetails {id}</h1>
    </div>
  );
}

export default MovieDetails;
