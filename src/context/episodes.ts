import { createContext } from "react";
import { Episode } from "../types";
const episodes = require("./../data/simpsons_episodes.csv");

const sorted = episodes.sort(
  (e1: Episode, e2: Episode) => e1.number_in_series - e2.number_in_series
);

export default createContext<Episode[]>(sorted);
