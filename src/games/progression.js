import buildGame from '../core';
import getRandomNum from '../utils';

const makeProgression = (progressionLength = 10) => {
  const step = getRandomNum(1, 15);
  const initValue = getRandomNum(0, 100);

  const iter = (acc) => {
    if (acc.length === progressionLength) return acc;

    const prevValue = acc[acc.length - 1];
    const newAcc = [...acc, prevValue + step];

    return iter(newAcc);
  };

  return iter([initValue]);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';
const makeGameQuestion = () => {
  const progression = makeProgression();
  const hiddenValueIndex = getRandomNum(0, progression.length);
  const hiddenValue = progression[hiddenValueIndex];

  const gameQuestionBody = progression.reduce((acc, value, index) => {
    if (index === hiddenValueIndex) return `${acc} ..`;
    return `${acc} ${value}`;
  }, '');
  const gameQuestion = `Question: ${gameQuestionBody}`;
  const correctAnswer = hiddenValue.toString(10);

  return { gameQuestion, correctAnswer };
};

export default () => buildGame(gameDescription, makeGameQuestion);
