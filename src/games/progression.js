import runGame from '../core';
import getRandomNum from '../utils';

const length = 10;

const makeProgressionWithHiddenValue = (initValue, step, hiddenValueIndex) => {
  const iter = (acc, index) => {
    if (index === length) return acc;

    if (index === hiddenValueIndex) {
      return iter(`${acc} ..`, index + 1);
    }

    const currentValue = initValue + step * index;
    const newAcc = `${acc} ${currentValue}`;

    return iter(newAcc, index + 1);
  };

  return iter('', 0);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';
const makeGameData = () => {
  const step = getRandomNum(1, 15);
  const initValue = getRandomNum(0, 100);
  const hiddenValueIndex = getRandomNum(0, length - 1);

  const gameQuestion = makeProgressionWithHiddenValue(initValue, step, hiddenValueIndex);
  const correctAnswer = String(initValue + step * hiddenValueIndex);

  return { gameQuestion, correctAnswer };
};

export default () => runGame(gameDescription, makeGameData);
