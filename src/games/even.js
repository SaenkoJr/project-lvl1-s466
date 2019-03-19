import buildGame from '../core';
import { getRandomNum } from '../utils/index';

const isEven = num => num % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const makeGameQuestion = () => {
  const gameQuestionNum = getRandomNum(0, 100);
  const correctAnswer = isEven(gameQuestionNum) ? 'yes' : 'no';
  const gameQuestion = `Question: ${gameQuestionNum}`;

  return { gameQuestion, correctAnswer };
};

export default () => buildGame(gameDescription, makeGameQuestion);
