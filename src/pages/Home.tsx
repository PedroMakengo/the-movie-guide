import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/movie-details/1">Filme</Link>
      <Link to="/movie-details/2">Filme</Link>
    </div>
  );
}

export default Home;
