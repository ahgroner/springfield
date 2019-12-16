import * as React from "react";
import CharactersContext from "./../context/characters";
import { values } from "lodash";
import CharacterCard from "./character-card";
import { getCharacters } from "../actions";

import styled from "styled-components";
import { colors } from "../constants/colors";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  overflow: auto;
  align-items: baseline;
  background: ${colors.yellow};
`;

interface Props {}

const Characters: React.SFC<Props> = props => {
  const { characters } = React.useContext(CharactersContext);
  return (
    <Wrapper>
      {values(characters).map((c, i) => (
        <CharacterCard character={c} key={`${c.id}_${i}`} />
      ))}
    </Wrapper>
  );
};

export default Characters;
