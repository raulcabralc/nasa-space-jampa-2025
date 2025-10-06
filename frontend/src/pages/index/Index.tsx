import logoImg from "../../assets/BioSearch.png";

import {
  IndexContainer,
  Link,
  Logo,
  Paragraph,
  Small,
  Title,
} from "./Index.styled";

function Index() {
  return (
    <IndexContainer>
      <Logo src={logoImg} alt="logo" />
      <Title>
        BioSearch{" "}
        <Small
          target="_blank"
          href="https://www.spaceappschallenge.org/2025/find-a-team/bullet-in-the-doll/"
        >
          by Bullet in the Doll
        </Small>
      </Title>
      <Paragraph>
        An AI developed to make spacial biology searches easier
      </Paragraph>
      <Link href="/ask">Talk to the AI</Link>
    </IndexContainer>
  );
}

export default Index;
