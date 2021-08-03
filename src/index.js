import './style.css';

const arrOfObjs = [
  {
    name: 'Name',
    score: '100',
  },
  {
    name: 'Name',
    score: '20',
  },
  {
    name: 'Name',
    score: '50',
  },
  {
    name: 'Name',
    score: '78',
  },
  {
    name: 'Name',
    score: '125',
  },
  {
    name: 'Name',
    score: '77',
  },
  {
    name: 'Name',
    score: '42',
  },
]

function htmlContent() {
  const container = document.getElementById('container');

  // Header
  const header = document.createElement('header');
  const header1 = document.createElement('h1');
  header1.textContent = 'Leaderboard';

  header.appendChild(header1);

  // Main 
  const main = document.createElement('main');

  // Section 1
  const section1 = document.createElement('section');
  const scoresTitle = document.createElement('div');
  const recentScores = document.createElement('h2');
  const scoresTitleBtn = document.createElement('button');

  section1.id = 'recent-scores';
  scoresTitle.id = 'scores-title';

  recentScores.textContent = 'Recent Scores';

  scoresTitleBtn.setAttribute('type', 'button');
  scoresTitleBtn.textContent = 'Refresh';

  // scores Div
  const scores = document.createElement('div');
  scores.id = 'scores';

  arrOfObjs.forEach((obj, i) => {
    const names = document.createElement('div');

    names.textContent = `${obj.name}: ${obj.score}`;
    scores.appendChild(names);

    if (i % 2 === 0) {
      names.classList.add('names');
    } else {
      names.classList.add('names2');
    }
    console.log(i)
  });

  // Section 2
  const section2 = document.createElement('section');
  const addYourScore = document.createElement('h2');
  // Form
  const form = document.createElement('form');
  form.setAttribute('action', 'https://formspree.io/f/mayajwdo');
  form.setAttribute('method', 'POST');
  const labelName = document.createElement('label');
  const inputName = document.createElement('input');
  const labelScore = document.createElement('label');
  const inputScore = document.createElement('input');
  const containerSubmitBtn = document.createElement('div');
  const submitBtn = document.createElement('input');

  //container appendChilds
  container.appendChild(header);
  container.appendChild(main);
  // main appendChild
  main.appendChild(section1);
  main.appendChild(section2);
  // Section1 score-title appendChild
  section1.appendChild(scoresTitle);
  scoresTitle.appendChild(recentScores);
  scoresTitle.appendChild(scoresTitleBtn);
  // Section 1 scores appendChild
  section1.appendChild(scores);

}

// window.addEventListener('DOMContentLoaded', () => {
htmlContent();
// })