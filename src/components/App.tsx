import * as React from "react";
import { hot } from "react-hot-loader";
import Episodes from "./episodes";
import Characters from "./characters";
import CharactersProvider from "./characters-provider";
import ActiveCharacter from "./active-character";
import GlobalStyle from "./global-style";
const donut = require("./../assets/img/donut.svg");
import TopNav from "./top-nav";

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app">
        <GlobalStyle />
        <CharactersProvider>
          <TopNav />
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
