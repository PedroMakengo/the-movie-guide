import { SectionBanner, Container, ButtonList } from "./styles";

interface ITButtons {
  array: string[];
}

function Banner({ array }: ITButtons) {
  return (
    <SectionBanner>
      <Container>
        <h1>
          Track films you've watched. Discover millions of movies. Explore now.
        </h1>
        <span>Filter By:</span>
        <ButtonList>
          {array.map((button) => (
            <button>{button}</button>
          ))}
        </ButtonList>
      </Container>
    </SectionBanner>
  );
}

export default Banner;
