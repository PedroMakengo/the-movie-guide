import { useEffect } from "react";

interface ITHead {
  title: string;
  description: string;
}

function Head({ title, description }: ITHead) {
  useEffect(() => {}, []);
  return <></>;
}

export default Head;
