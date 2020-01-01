import * as React from "react";
import CharactersContext from "./../context/characters";
import { getCharacters, getCharacterData } from "../actions";
import { Character } from "../types";

interface Props {}

const CharactersProvider: React.SFC<Props> = props => {
  const [characters, setCharacters] = React.useState<{
    [id: string]: Character;
  }>({});
  const [characterData, setCharacterData] = React.useState<{
    [id: string]: CharacterData;
  }>({});
  const [activeCharacter, setActiveCharacter] = React.useState<string>("");

  const [recievedData, setRecievedData] = React.useState<CharacterData>(
    undefined
  );

  React.useEffect(() => {
    if (recievedData) {
      setCharacterData({ ...characterData, [recievedData.id]: recievedData });
    }
  }, [recievedData]);

  React.useEffect(() => {
    getCharacters({ limit: 200, page: 1 }).then(result => {
      setCharacters(result.data);
    });
  }, []);

  const fetchCharacterData = (id: string) => {
    if (id in characterData) {
      return;
    }
    characterData[id] = false;
    setCharacterData(characterData);
    getCharacterData(id).then(setRecievedData);
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
