import buildGame from '../core';
import getRandomNum from '../utils';

const makeProgression = (initValue, step, length) => {
  const iter = (acc, index) => {
    if (index === length) return acc;
    const nextNumber = initValue + step * index;
    const newAcc = [...acc, nextNumber];
    return iter(newAcc, index + 1);
  };

  return iter([], 0);
};

const length = 10;

const gameDescription = 'Find the greatest common divisor of given numbers.';
const makeGameProcess = () => {
  const step = getRandomNum(1, 15);
  const initValue = getRandomNum(0, 100);

  const progression = makeProgression(initValue, step, length);

  const hiddenValueIndex = getRandomNum(0, length - 1);
  const hiddenValue = initValue + step * hiddenValueIndex;

  const gameQuestion = progression.reduce((acc, value) => (
    value === hiddenValue ? `${acc} ..` : `${acc} ${value}`
  ), '');
  const correctAnswer = hiddenValue.toString();

  return { gameQuestion, correctAnswer };
};

export default () => buildGame(gameDescription, makeGameProcess);
