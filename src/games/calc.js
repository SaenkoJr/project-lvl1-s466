import buildGame from '../core';
import { getRandomNum, getRandomOperator } from '../utils/index';

const operators = ['+', '-', '*'];
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const gameDescription = 'What is the result of the expression?';
const makeGameQuestion = () => {
  const currentOperator = getRandomOperator(operators, operators.length);
  const leftConst = getRandomNum(0, 100);
  const rightConst = getRandomNum(0, 100);

  const gameQuestion = `Question: ${leftConst} ${currentOperator} ${rightConst}`;
  const currentExpression = operations[currentOperator];
  const correctAnswer = currentExpression(leftConst, rightConst);

  return { gameQuestion, correctAnswer: correctAnswer.toString(10) };
};

export default () => buildGame(gameDescription, makeGameQuestion);
