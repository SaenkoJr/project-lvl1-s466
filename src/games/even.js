import buildGame from '../core';
import getRandomNum from '../utils';

const isEven = num => num % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const makeGameProcess = () => {
  const gameQuestionBody = getRandomNum(0, 100);
  const correctAnswer = isEven(gameQuestionBody) ? 'yes' : 'no';
  const gameQuestion = `Question: ${gameQuestionBody}`;

  return { gameQuestion, correctAnswer };
};

export default () => buildGame(gameDescription, makeGameProcess);
