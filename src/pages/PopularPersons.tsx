import { Link } from "react-router-dom";
import Head from "../components/Head";

function PopularPersons() {
  return (
    <main>
      <Head title="PersonDetails" description="Testando" />
      <h1>PopularPersons</h1>
      <Link to="/person-details/1">Pedro Makengo</Link>
      <Link to="/person-details/2">Antónia Manuel Vicente</Link>
      <Link to="/person-details/3">Dorcas Kifi</Link>
      <Link to="/person-details/4">Abel Makengo</Link>
      <Link to="/person-details/5">Isabel Ntanda</Link>
    </main>
  );
}

export default PopularPersons;
