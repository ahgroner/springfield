const express = require("express");
const app = express();
const portNumber = 3000;
const sourceDir = "dist";
const fs = require("fs");
const papa = require("papaparse");
const parse = require("./parse");

const cors = require("cors");

console.log(parse.handleResults);
app.use(express.static(sourceDir));

app.use(cors());

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});

let scriptLines = [];
let parsed = {};

const readFile = path =>
  new Promise(resolve => {
    fileContent = fs.readFileSync(path, { encoding: "utf8" });
    resolve(fileContent);
  });

const csvStringToJSON = text =>
  new Promise(resolve => {
    papa.parse(text, {
      worker: true,
      header: true,
      complete: ({ data, errors, meta }) => {
        resolve(data);
      }
    });
  });

const csvFileToJson = path => readFile(path).then(csvStringToJSON);

console.log("Parsing files");

Promise.all([
  csvFileToJson("./src/data/simpsons_script_lines.csv"),
  csvFileToJson("./src/data/simpsons_characters.csv")
]).then(([lines, characters]) => {
  parsed = parse.handleResults({ lines, characters });
  console.log("Parsed. Ready to serve");
});

app.get("/server/characters/:characterId", function(req, res) {
  const { characterId } = req.params;

  return res.json({
    id: characterId,
    linesPerEpisode: parsed.episodesByCharacter[characterId],
    linesPerLocation: parsed.linesByCharacterByLocation[characterId]
  });
});

app.get("/server/characters", function(req, res) {
  const {
    query: { limit = 100, page = 1 }
  } = req;

  const start = limit * (page - 1);
  const resultData = parsed.sortedCharacters.slice(start, start + limit);

  return res.json({
    data: resultData,
    total: parsed.sortedCharacters.length
  });
});
