import { Link } from "react-router-dom";

function PopularPersons() {
  return (
    <div>
      <h1>PopularPersons</h1>

      <Link to="/person-details/1">Pedro Makengo</Link>
      <Link to="/person-details/2">Antónia Manuel Vicente</Link>
      <Link to="/person-details/3">Dorcas Kifi</Link>
      <Link to="/person-details/4">Abel Makengo</Link>
      <Link to="/person-details/5">Isabel Ntanda</Link>
    </div>
  );
}

export default PopularPersons;
