import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { ContentButton, ButtonAtive } from "./styles";

interface ITButton {
  children: string;
}

function Button({ children }: ITButton) {
  const [ative, setAtive] = useState(false);

  function handleAtiveButton(event: any) {
    console.log(event.target.innerText);
    setAtive((ative) => !ative);
  }

  if (ative) {
    return (
      <ButtonAtive className="ative" onClick={handleAtiveButton}>
        {children} <FaWindowClose />
      </ButtonAtive>
    );
  } else {
    return (
      <ContentButton onClick={handleAtiveButton}>{children}</ContentButton>
    );
  }
}

export default Button;
