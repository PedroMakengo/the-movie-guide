import styled from "styled-components";

import bgBanner from "../../assets/banners/bg-banner.png";

export const SectionBanner = styled.div`
  height: 431.16px;
  background: url(${bgBanner});
  background-position: center;
  background-size: cover;

  color: #fff;
`;

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  text-align: center;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 2rem;
  padding-bottom: 3rem;

  h1 {
    width: 781px;
    font-weight: 700;
    font-size: 46px;
  }
  span {
    text-transform: uppercase;
  }
`;

export const ButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  button {
    margin-right: 1rem;

    padding: 8px 16px;
    height: 40px;
    margin-top: 1rem;

    cursor: pointer;
  }
`;
