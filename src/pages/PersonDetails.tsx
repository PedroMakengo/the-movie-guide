import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PersonDetails() {
  const [person, setPerson] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    setPerson("Pedro");
  }, [id]);

  if (person === null) return null;
  return (
    <div>
      <h1>PersonDetails {id}</h1>
    </div>
  );
}

export default PersonDetails;
