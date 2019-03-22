import runGame from '../core';
import getRandomNum from '../utils';

const operators = ['+', '-', '*'];
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const gameDescription = 'What is the result of the expression?';
const makeGameData = () => {
  const currentOperatorIndex = getRandomNum(0, operators.length - 1);
  const currentOperator = operators[currentOperatorIndex];

  const leftConst = getRandomNum(0, 100);
  const rightConst = getRandomNum(0, 100);

  const gameQuestion = `${leftConst} ${currentOperator} ${rightConst}`;

  const currentMathOperation = operations[currentOperator];
  const correctAnswer = String(currentMathOperation(leftConst, rightConst));

  return { gameQuestion, correctAnswer };
};

export default () => runGame(gameDescription, makeGameData);
