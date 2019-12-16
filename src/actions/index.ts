export const getCharacters = ({
  limit,
  page
}: {
  limit: number;
  page: number;
}) =>
  fetch(
    `http://localhost:3000/server/characters?limit=${limit}&page=${page}`
  ).then(res => res.json());

export const getCharacterData = (id: string) =>
  fetch(`http://localhost:3000/server/characters/${id}`, {
    method: "get"
  }).then(res => res.json());
