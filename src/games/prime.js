import runGame from '../core';
import getRandomNum from '../utils';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;

  const root = Math.sqrt(num);
  const iter = (index) => {
    if (num % index === 0) return false;
    if (index > root) return true;

    return iter(index + 1);
  };

  return iter(2);
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const makeGameData = () => {
  const gameQuestion = getRandomNum(0, 1000);
  const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';

  return { gameQuestion, correctAnswer };
};

export default () => runGame(gameDescription, makeGameData);
