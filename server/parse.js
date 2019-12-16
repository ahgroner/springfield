const natural = require("natural");
const _ = require("lodash");

const handleResults = ({ lines, characters }) => {
  lines = lines.filter(l => !!l.character_id);

  const linesByCharacter = _.groupBy(lines, "character_id");

  characters = characters.map(c => ({
    ...c,
    total_lines: linesByCharacter[c.id] ? linesByCharacter[c.id].length : 0
  }));

  const sortedCharacters = _.orderBy(characters, ["total_lines"], ["desc"]);

  const linesByCharacterByLocation = _.mapValues(linesByCharacter, lines =>
    _.mapValues(_.groupBy(lines, "location_id"), l => l.length)
  );

  const episodesByCharacter = _.mapValues(linesByCharacter, lines =>
    _.mapValues(_.groupBy(lines, "episode_id"), l => l.length)
  );

  return {
    sortedCharacters,
    linesByCharacter,
    linesByCharacterByLocation,
    episodesByCharacter
  };
};

module.exports = {
  handleResults
};
