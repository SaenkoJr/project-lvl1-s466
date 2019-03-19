import gameBuild from '../core';
import { getRandomNum } from '../utils/index';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';
const makeQuestion = () => {
  const num = getRandomNum(0, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  const question = `Question: ${num}`;

  return { question, correctAnswer };
};

export default () => gameBuild(description, makeQuestion);
