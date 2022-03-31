import styled from "styled-components";

export const ContentButton = styled.button`
  margin-right: 1rem;

  padding: 8px 16px;
  height: 40px;
  margin-top: 1rem;

  cursor: pointer;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonAtive = styled(ContentButton)`
  background: #00df5e;
  font-weight: bold;

  svg {
    margin-left: 0.3rem;
  }
`;
