import * as React from "react";
import EpisodeContext from "../context/episodes";
import EpisodeCell from "./episode-cell";

import styled from "styled-components";
import CharactersContext from "../context/characters";
import { get } from "lodash";
import { Title } from "./text";

interface Props {}

const Wrapper = styled.div`
  padding: 24px;
`;

const Dismiss = styled.div`
  font-family: Simpsons;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1000px;
  margin-left: 16px;
  color: white;
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const ActiveCharacter: React.SFC<Props> = props => {
  const { active, setActiveCharacter } = React.useContext(CharactersContext);

  const linesPerEpisode = get(active, "data.linesPerEpisode", {});

  const episodeAppearances = Object.keys(linesPerEpisode).length;

  if (!active.character) {
    return false;
  }
  return (
    <Wrapper>
      <Row>
        <Title>{active.character.name}</Title>
        <Dismiss onClick={() => setActiveCharacter("")}>clear</Dismiss>
      </Row>
      Appears in {episodeAppearances} episodes.
    </Wrapper>
  );
};

export default ActiveCharacter;
