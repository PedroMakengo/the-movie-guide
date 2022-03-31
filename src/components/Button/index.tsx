import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { ContentButton, ButtonAtive } from "./styles";

interface ITButton {
  children: string;
}

function Button({ children }: ITButton) {
  const [ative, setAtive] = useState(false);

  function handleAtiveButton(event: any) {
    event.preventDefault();
    setAtive((ative) => !ative);
    console.log(event.target.innerText);
  }

  if (ative) {
    return (
      <ButtonAtive className="ative" onClick={handleAtiveButton}>
        {children} <FaTimesCircle />
      </ButtonAtive>
    );
  } else {
    return (
      <ContentButton onClick={handleAtiveButton}>{children}</ContentButton>
    );
  }
}

export default Button;
