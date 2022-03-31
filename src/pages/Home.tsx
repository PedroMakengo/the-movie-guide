import { Link } from "react-router-dom";

import Head from "../components/Head";
import Banner from "../components/Banner";
import PopularFilms from "../components/PopularFilms";

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
      <PopularFilms />
    </main>
  );
}

export default Home;
