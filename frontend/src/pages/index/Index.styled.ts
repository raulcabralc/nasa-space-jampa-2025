import styled from "styled-components";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

const IndexContainer = styled.div`
  margin: 0 270px;
  display: flex;
  flex-flow: column nowrap;
`;

const Logo = styled.img`
  width: 300px;
  height: auto;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0 auto;
  font-size: 3rem;
`;

const Small = styled.a`
  font-size: 1rem;
  color: ${colors.text};
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 40px auto;
`;

const Link = styled.a`
  padding: 8px 16px;
  border-radius: 100px;
  background: ${colors.mediumPrimary};
  color: white;
  border: none;
  font-size: 1.5rem;
  font-family: ${fonts.Jost};
  transition: all 0.2s ease;
  width: max-content;
  margin: 0 auto;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px ${colors.mediumPrimary};
  }
`;

export { IndexContainer, Logo, Title, Small, Paragraph, Link };
