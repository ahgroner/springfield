import * as React from "react";
import EpisodeContext from "../context/episodes";
import EpisodeCell from "./episode-cell";

import styled from "styled-components";
import CharactersContext from "../context/characters";
import { get } from "lodash";

interface Props {}

const Episodes: React.SFC<Props> = props => {
  const episodes = React.useContext(EpisodeContext);
  const [bySeason, toggleBySeason] = React.useState<boolean>(false);

  const { active } = React.useContext(CharactersContext);

  const linesPerEpisode = get(active, "data.linesPerEpisode", {});

  const episodeAppearances = Object.keys(linesPerEpisode).length;

  return (
    <div>
      <h2>{active.character.name}</h2>
      Appears in {episodeAppearances} episodes.
    </div>
  );
};

export default Episodes;
