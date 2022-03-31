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
    </main>
  );
}

export default Home;
