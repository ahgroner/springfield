const SimpsonsFontURL = require("../assets/fonts/akbar.ttf");

import { createGlobalStyle } from "styled-components";
import { colors } from "../constants/colors";

export default createGlobalStyle`
  @font-face {
    font-family: Simpsons;
    src: url(${SimpsonsFontURL}) format('truetype')
  }

  body {
    background: ${colors.navy};
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
  }
`;
