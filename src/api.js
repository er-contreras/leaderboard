const postGame = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'My cool new Game'
    }),
  })

  const gameID = await response.json();
  return gameID;

}

const apiContent = async () =>{
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9iMIGy5DL3lZvglxeZQW/scores/';

  const response = await fetch(url);
  const scores = await response.json();
  
  return scores.result;
}

export { postGame, apiContent };