import { createContext } from "react";
const characters = require("./../data/simpsons_characters.csv");
import { keyBy, sortBy } from "lodash";
import moment from "moment";
import { Character } from "../types";

interface CharacterData {}

interface CharacterContext {
  characters: Character[];
  activeCharacter: string;
  characterData: { [id: string]: CharacterData };
  setActiveCharacter?: (id: string) => void;
  fetchCharacterData?: (id: string) => void;
  active: {
    character?: Character;
    data?: CharacterData;
  };
}

export default createContext<CharacterContext>({
  activeCharacter: "",
  characterData: {},
  characters: keyBy(sortBy(characters, "id"), "id"),
  active: {}
});
