import * as React from "react";
import CharactersContext from "./../context/characters";
import { values } from "lodash";
import CharacterCard from "./character-card";

import styled from "styled-components";
import { colors } from "../constants/colors";

const Wrapper = styled.div`
  height: 200px;
  display: flex;
  flex-flow: row;
  width: calc(100vw - 64px);
  margin-left: 32px;
  overflow: auto;
  align-items: baseline;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
`;

interface Props {}

const Characters: React.SFC<Props> = props => {
  const { characters, activeCharacter } = React.useContext(CharactersContext);
  return (
    <Wrapper>
      {values(characters).map((c, i) => (
        <CharacterCard
          character={c}
          key={`${c.id}_${i}`}
          active={c.id === activeCharacter}
        />
      ))}
    </Wrapper>
  );
};

export default Characters;
