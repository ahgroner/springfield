import * as React from "react";
import CharactersContext from "./../context/characters";
import { values } from "lodash";
import CharacterCoin from "./character-card";
import { getCharacters, getCharacterData } from "../actions";

interface Props {}

const CharactersProvider: React.SFC<Props> = props => {
  const [characters, setCharacters] = React.useState({});
  const [activeCharacter, setActiveCharacter] = React.useState<string>("");
  const [characterData, setCharacterData] = React.useState({});

  React.useEffect(() => {
    getCharacters({ limit: 200, page: 1 }).then(result => {
      setCharacters(result.data);
    });
  }, []);

  const fetchCharacterData = (id: string) => {
    console.log(characterData);
    if (id in characterData) {
      return;
    }
    // fetching
    characterData[id] = false;
    setCharacterData(characterData);

    getCharacterData(id).then(data => {
      // fetched
      setCharacterData({ ...characterData, [id]: data });
    });
  };
  const active = React.useMemo(
    () => ({
      character:
        activeCharacter && characters.find(({ id }) => id === activeCharacter),
      data: activeCharacter && characterData[activeCharacter]
    }),
    [activeCharacter, characterData, characters]
  );

  return (
    <CharactersContext.Provider
      value={{
        activeCharacter,
        characters,
        setActiveCharacter,
        fetchCharacterData,
        active,
        characterData
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
