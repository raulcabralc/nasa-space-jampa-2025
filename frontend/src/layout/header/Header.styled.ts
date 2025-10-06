import styled from "styled-components";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

const HeaderStyle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  background: ${colors.mediumWhite};
  height: 100px;
  padding: 0 100px;
  border-bottom: 1px solid ${colors.darkWhite};
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  gap: 5px;
  text-decoration: none;
  color: ${colors.text};
  font-family: ${fonts.Poppins};
  transition: transform 0.2s ease;

  img {
    width: 50px;
  }

  &:hover {
    transform: scale(110%);
  }
`;

const Credits = styled.a`
  color: ${colors.text};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(120%);
  }
`;

export { HeaderStyle, Logo, Credits };
