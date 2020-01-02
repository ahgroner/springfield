import * as React from "react";
import EpisodeContext from "./../context/episodes";
import EpisodeCell from "./episode-cell";
import styled from "styled-components";
import CharactersContext from "./../context/characters";

const Centerer = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const EpisodesWrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  max-width: 960px;
  padding: 20px;
`;

const SeasonHeader = styled.div`
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  width: 100%;
  padding: 10px 0 6px 0;
`;

const ToggleItem = styled.div`
  cursor: pointer;
  padding: 10px;
`;

interface Props {}

const Episodes: React.SFC<Props> = props => {
  const episodes = React.useContext(EpisodeContext);
  const [bySeason, toggleBySeason] = React.useState<boolean>(false);

  const { active } = React.useContext(CharactersContext);

  return (
    <div>
      <Centerer>
        <ToggleItem onClick={() => toggleBySeason(false)}>Grid</ToggleItem>
        <ToggleItem onClick={() => toggleBySeason(true)}>Season</ToggleItem>
      </Centerer>
      <Centerer>
        <EpisodesWrapper>
          {episodes.map(e => (
            <>
              {bySeason && e.number_in_season === 1 && (
                <SeasonHeader key={`season_${e.season}`}>
                  Season {e.season}
                </SeasonHeader>
              )}
              <EpisodeCell
                episode={e}
                key={e.id}
                active={active.data && !!active.data.linesPerEpisode[e.id]}
              />
            </>
          ))}
        </EpisodesWrapper>
      </Centerer>
    </div>
  );
};

export default Episodes;
