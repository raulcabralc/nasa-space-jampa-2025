import styled from "styled-components";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 100px;
  background: ${colors.mediumPrimary};
  color: white;
  border: none;
  font-size: 18px;
  font-family: ${fonts.Jost};
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px ${colors.mediumPrimary};
  }
`;

export { Button };
