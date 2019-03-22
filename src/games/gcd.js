import runGame from '../core';
import getRandomNum from '../utils';

const findGCD = (a, b) => (b !== 0 ? findGCD(b, a % b) : a);

const gameDescription = 'Find the greatest common divisor of given numbers.';
const makeGameData = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);

  const gameQuestion = `${num1} ${num2}`;
  const correctAnswer = String(findGCD(num1, num2));

  return { gameQuestion, correctAnswer };
};

export default () => runGame(gameDescription, makeGameData);
