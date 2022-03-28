import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Head from "../components/Head";

function PersonDetails() {
  const [person, setPerson] = useState<string | null>(null);
  const { id } = useParams();

  // Pegar dados do usuário pelo o seu id
  useEffect(() => {
    console.log(id);
    setPerson("Pedro");
  }, [id]);

  if (person === null) return null;
  return (
    <main>
      <Head title="PersonDetails" description="Testando" />
      <h1>PersonDetails {id}</h1>
    </main>
  );
}

export default PersonDetails;
