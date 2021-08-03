import _ from 'lodash';
import './style.css';
import Wolfy from './wolfy.jpg';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  // Add the image to our existing div.
  const myImg = new Image();
  myImg.src = Wolfy;

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component())