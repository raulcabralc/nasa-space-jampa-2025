import styled from "styled-components";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

const NotFoundContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  font-family: ${fonts.Jost};
`;

const Header404 = styled.h1`
  font-size: 10rem;
  color: ${colors.mediumPrimary};
`;

const Paragraph404 = styled.p`
  font-size: 2rem;
  color: ${colors.text};
`;

const Link404 = styled.a`
  font-size: 1.5rem;
  color: ${colors.darkerPrimary};
  margin-top: 2rem;
`;

export { NotFoundContainer, Header404, Paragraph404, Link404 };
