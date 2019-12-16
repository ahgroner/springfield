import * as React from "react";
import { Character } from "../types";
import styled from "styled-components";
import CharactersContext from "./../context/characters";

const charactersPath = require.context("./../assets/img/character", false);
const keys = charactersPath.keys();

interface Props {
  character: Character;
}

const Wrapper = styled.div`
  padding: 0 16px;
  height: 200px;
  position: relative;
  > img {
    height: 100%;
  }
  cursor: pointer;
`;

const Character: React.SFC<Props> = props => {
  let src = "";
  try {
    const path = "./" + props.character.id + ".png";
    src = keys.includes(path) && charactersPath(path);
  } catch (e) {
    console.log(e);
  }

  const { fetchCharacterData, setActiveCharacter } = React.useContext(
    CharactersContext
  );

  const {
    character: { id }
  } = props;

  const onClick = () => {
    setActiveCharacter(id);
    fetchCharacterData(id);
  };
  return (
    <Wrapper key={id} onClick={onClick} onMouseOver={onClick}>
      <img height="100" src={src} />
    </Wrapper>
  );
};

export default Character;
