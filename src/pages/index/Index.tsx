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
        BioSearch <Small>by Bullet in the Doll</Small>
      </Title>
      <Paragraph>
        Uma IA desenvolvida para ajudar na busca de pesquisas em biologia
        expacial
      </Paragraph>
      <Link href="/ask">Conversar com a IA</Link>
    </IndexContainer>
  );
}

export default Index;
