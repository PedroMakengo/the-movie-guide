import { useEffect } from "react";

interface ITHead {
  title: string;
  description: string;
}

function Head({ title, description }: ITHead) {
  useEffect(() => {
    document.title = "The Movie Guide | " + title;
    document
      .querySelector('meta[name="description"')
      ?.setAttribute("content", description);
  }, [title, description]);
  return <></>;
}

export default Head;
