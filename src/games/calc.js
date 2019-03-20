import buildGame from '../core';
import getRandomNum from '../utils';

const operators = ['+', '-', '*'];
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomOperator = (coll, maxDiapason) => coll[getRandomNum(0, maxDiapason)];

const gameDescription = 'What is the result of the expression?';
const makeGameProcess = () => {
  const currentOperator = getRandomOperator(operators, operators.length - 1);
  const leftConst = getRandomNum(0, 100);
  const rightConst = getRandomNum(0, 100);

  const gameQuestion = `Question: ${leftConst} ${currentOperator} ${rightConst}`;

  const currentExpression = operations[currentOperator];
  const expressionResult = currentExpression(leftConst, rightConst);
  const correctAnswer = expressionResult.toString();

  return { gameQuestion, correctAnswer };
};

export default () => buildGame(gameDescription, makeGameProcess);
