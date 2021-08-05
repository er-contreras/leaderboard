const addScores = () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;

    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9iMIGy5DL3lZvglxeZQW/scores/';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score: parseInt(score, 10),
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  })
}

export default addScores;