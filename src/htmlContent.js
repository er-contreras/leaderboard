const htmlContent = () => {
  const container = document.getElementById('container');
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
  scoresTitleBtn.id = 'refresh';
  // scores Div
  const scores = document.createElement('div');
  scores.id = 'scores';
  // Section 2
  const section2 = document.createElement('section');
  section2.id = 'add-score';

  const addYourScore = document.createElement('h2');
  addYourScore.textContent = 'Add your score';
  // Form
  const form = document.createElement('form');
  form.id = 'form';

  const labelName = document.createElement('label');
  labelName.setAttribute('for', 'name');

  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'name');
  inputName.setAttribute('placeholder', 'Your Name');
  inputName.id = 'name';
  inputName.setAttribute('required', '');

  const labelScore = document.createElement('label');
  labelName.setAttribute('for', 'score');

  const inputScore = document.createElement('input');
  inputScore.setAttribute('type', 'text');
  inputScore.setAttribute('name', 'score');
  inputScore.setAttribute('placeholder', 'Your Score');
  inputScore.id = 'score';
  inputScore.setAttribute('required', '');

  const containerSubmitBtn = document.createElement('div');
  containerSubmitBtn.id = 'submit-container';

  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.id = 'submit';

  // container appendChilds
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
  // Section 2
  section2.appendChild(addYourScore);
  section2.appendChild(form);
  form.appendChild(labelName);
  form.appendChild(inputName);
  form.appendChild(labelScore);
  form.appendChild(inputScore);
  form.appendChild(containerSubmitBtn);
  containerSubmitBtn.appendChild(submitBtn);
};

export default htmlContent;