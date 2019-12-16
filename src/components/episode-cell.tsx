import * as React from "react";
import styled from "styled-components";

import EpisodeContext from "./../context/episodes";

import { colors } from "../constants/colors";
import { Episode } from "../types";

const Cell = styled.div`
  width: 24px;
  height: 24px;
  background: ${colors.yellow};
  opacity: ${props => (props.active ? 1 : 0.2)};
  margin: 5px 5px 0 0;
  border-radius: 2px;
`;

export interface Props {
  episode: Episode;
  active: boolean;
}

const EpisodeCell: React.SFC<Props> = props => {
  const episodes = React.useContext(EpisodeContext);

  return <Cell active={props.active} />;
};

export default EpisodeCell;
