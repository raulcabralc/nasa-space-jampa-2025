import { createGlobalStyle } from "styled-components";
import { colors } from "./constants/colors";
import { fonts } from "./constants/fonts";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ::selection {
    background: ${colors.mediumPrimary};
    color: white;
  }

  body {
    font-family: ${fonts.Raleway};
    color: ${colors.text};
    background: ${colors.lightWhite};
  }
`;
