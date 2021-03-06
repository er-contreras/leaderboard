import './style.css';
import htmlContent from './htmlContent.js';
import addScores from './form.js';
import animatedTrail from './trail.js';
// Create HTML Content
htmlContent();

// Call
addScores();

// postGame();

const apiContent = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9iMIGy5DL3lZvglxeZQW/scores/';

  const response = await fetch(url);
  const apiScores = await response.json();
  const almost = apiScores.result;
  almost.sort((a, b) => b.score - a.score);

  const refresh = document.getElementById('refresh');

  refresh.addEventListener('click', () => {
    const scores = document.getElementById('scores');
    scores.innerHTML = '';
    almost.map((obj, i) => {
      const names = document.createElement('div');

      names.textContent = `${obj.user}: ${obj.score}`;
      scores.appendChild(names);

      return i % 2 === 0 ? names.classList.add('names') : names.classList.add('names2');
    });
  });
};

apiContent();

// Title
const title = document.getElementById('title').textContent;

let empty = '';
for (const i of title) { /* eslint-disable-line */
  empty += `<span class = 'x'>${i}</span>`;
}

document.getElementById('title').innerHTML = empty;

// Trails
animatedTrail();