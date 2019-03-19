import buildGame from '../core';
import getRandomNum from '../utils';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return findGCD(b, a % b);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';
const makeGameQuestion = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const gcd = findGCD(num1, num2);

  const gameQuestionBody = `${num1} ${num2}`;
  const gameQuestion = `Question: ${gameQuestionBody}`;
  const correctAnswer = gcd.toString(10);

  return { gameQuestion, correctAnswer };
};

export default () => buildGame(gameDescription, makeGameQuestion);
