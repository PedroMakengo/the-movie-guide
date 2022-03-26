import { useParams, useLocation } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>MovieDetails {id}</h1>
    </div>
  );
}

export default MovieDetails;
