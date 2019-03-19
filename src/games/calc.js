import gameBuild from '../core';
import { getRandomNum, getRandomOperator } from '../utils/index';

const operators = ['+', '-', '*'];
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const description = 'What is the result of the expression?';
const makeQuestion = () => {
  const currentOperator = getRandomOperator(operators, operators.length);
  const leftConst = getRandomNum(0, 100);
  const rightConst = getRandomNum(0, 100);

  const question = `Question: ${leftConst} ${currentOperator} ${rightConst}`;
  const currentExpression = operations[currentOperator];
  const correctAnswer = currentExpression(leftConst, rightConst);

  return { question, correctAnswer: correctAnswer.toString(10) };
};

export default () => gameBuild(description, makeQuestion);
