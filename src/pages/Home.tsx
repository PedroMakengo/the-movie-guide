import { Link } from "react-router-dom";

import Head from "../components/Head";
import Banner from "../components/Banner";

function Home() {
  return (
    <main>
      <Head title="Home" description="Testando" />
      <Banner />
      <h1>Home</h1>
      <Link to="/movie-details/1">Filme</Link>
      <Link to="/movie-details/2">Filme</Link>
    </main>
  );
}

export default Home;
