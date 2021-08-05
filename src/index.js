import './style.css';
import { postGame } from './api.js';
import { apiContent } from './api.js';
import htmlContent from './htmlContent.js'
import addScores from './form';

htmlContent();

addScores();

postGame();

apiContent();

