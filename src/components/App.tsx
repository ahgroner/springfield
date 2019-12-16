import * as React from "react";
import { hot } from "react-hot-loader";
import Episodes from "./episodes";
import { createGlobalStyle } from "styled-components";
import { colors } from "../constants/colors";
import Characters from "./characters";
import CharactersProvider from "./characters-provider";
import ActiveCharacter from "./active-character";

const donut = require("./../assets/img/donut.svg");

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.navy};
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
  }
  h1 {
    font-size: 40px;
  }
`;

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app">
        <GlobalStyle />
        <CharactersProvider>
          {/* <h1>The Simpsons</h1> */}
          <Characters />
          <ActiveCharacter />

          <Episodes />
        </CharactersProvider>
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(App);
