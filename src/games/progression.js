import buildGame from '../core';
import getRandomNum from '../utils';

const length = 10;

const makeProgression = (initValue, step, hiddenValueIndex) => {
  const iter = (acc, index) => {
    if (index === length) return acc;

    if (index === hiddenValueIndex) {
      return iter(`${acc} ..`, index + 1);
    }

    const nextValue = initValue + step * index;
    const newAcc = `${acc} ${nextValue}`;

    return iter(newAcc, index + 1);
  };

  return iter('', 0);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';
const makeGameProcess = () => {
  const step = getRandomNum(1, 15);
  const initValue = getRandomNum(0, 100);

  const hiddenValueIndex = getRandomNum(0, length - 1);
  const hiddenValue = initValue + step * hiddenValueIndex;

  const gameQuestion = makeProgression(initValue, step, hiddenValueIndex);
  const correctAnswer = hiddenValue.toString();

  return { gameQuestion, correctAnswer };
};

export default () => buildGame(gameDescription, makeGameProcess);
