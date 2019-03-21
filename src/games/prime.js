import buildGame from '../core';
import getRandomNum from '../utils';

const isPrime = (num) => {
  if (num < 2) return false;

  const root = Math.sqrt(num);
  const iter = (index) => {
    if (num % index === 0) return false;
    if (index > root) return true;

    return iter(index + 1);
  };

  return iter(2);
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const makeGameProcess = () => {
  const gameQuestion = getRandomNum(0, 1000);
  const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';

  return { gameQuestion, correctAnswer };
};

export default () => buildGame(gameDescription, makeGameProcess);
