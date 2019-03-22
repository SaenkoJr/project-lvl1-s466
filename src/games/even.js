import runGame from '../core';
import getRandomNum from '../utils';

const isEven = num => num % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const makeGameData = () => {
  const gameQuestion = getRandomNum(0, 100);
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';

  return { gameQuestion, correctAnswer };
};

export default () => runGame(gameDescription, makeGameData);
