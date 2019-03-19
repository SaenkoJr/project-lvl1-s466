import buildGame from '../core';
import getRandomNum from '../utils';

const operators = ['+', '-', '*'];
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomOperator = (operatorsList, maxDiapason) => {
  const currentOperatorIndex = getRandomNum(0, maxDiapason);
  const operator = operatorsList[currentOperatorIndex];
  return operator;
};

const gameDescription = 'What is the result of the expression?';
const makeGameQuestion = () => {
  const currentOperator = getRandomOperator(operators, operators.length);
  const leftConst = getRandomNum(0, 100);
  const rightConst = getRandomNum(0, 100);

  const gameQuestion = `Question: ${leftConst} ${currentOperator} ${rightConst}`;

  const currentExpression = operations[currentOperator];
  const expressionResult = currentExpression(leftConst, rightConst);
  const correctAnswer = expressionResult.toString(10);

  return { gameQuestion, correctAnswer };
};

export default () => buildGame(gameDescription, makeGameQuestion);
