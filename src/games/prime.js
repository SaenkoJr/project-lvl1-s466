import buildGame from '../core';
import getRandomNum from '../utils';

const isPrime = num => num % 2 === 0;

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const makeGameProcess = () => {
  const gameQuestionBody = getRandomNum(0, 100);
  const gameQuestion = `Question: ${gameQuestionBody}`;
  const correctAnswer = isPrime(gameQuestionBody) ? 'yes' : 'no';

  return { gameQuestion, correctAnswer };
};

export default () => buildGame(gameDescription, makeGameProcess);
