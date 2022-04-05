import { SectionBanner, Container, ButtonList } from "./styles";
import Button from "../Button";

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
            <Button key={button}>{button}</Button>
          ))}
        </ButtonList>
      </Container>
    </SectionBanner>
  );
}

export default Banner;
