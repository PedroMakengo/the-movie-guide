import { Link } from "react-router-dom";

import Head from "../components/Head";
import Banner from "../components/Banner";

const arrayList = [
  "Acção",
  "Aventura",
  "Animação",
  "Comédia",
  "Crime",
  "Documentário",
  "Drama",
  "Familia",
  "Fantasia",
  "História",
  "Terror",
  "Música",
  "Mistério",
  "Romance",
  "Ficção cientifica",
  "Cinema TV",
  "Thriler",
  "Guerra",
  "Faroeste",
];

function Home() {
  return (
    <main>
      <Head title="Home" description="Testando" />
      <Banner array={arrayList} />
      {/* <Link to="/movie-details/1">Filme</Link>
      <Link to="/movie-details/2">Filme</Link> */}
    </main>
  );
}

export default Home;
