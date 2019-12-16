import { Moment } from "moment";

export interface Episode {
  id: number;
  image_url: string;
  number_in_season: number;
  number_in_series: number;
  original_air_date: string;
  original_air_year: number;
  production_code: string;
  season: number;
  title: string;
  us_viewers_in_millions: number;
}

export interface Character {
  id: string;
  name: string;
  normalized_name: string;
  gender: string;
  img: string;
}

export interface Line {
  id: string;
  episode_id: string;
  number: number;
  raw_text: string;
  timestamp_in_ms: number;
  speaking_line: string;
  character_id: string;
  location_id: string;
  raw_character_text: string;
  raw_location_text: string;
  spoken_words: number;
  normalized_text: string;
  word_count: number;
}
