import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;
const getRandomNum = () => Math.floor(Math.random() * 100);

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no". \n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);

  const gameRoundsCount = 3;

  const playGameRound = (times) => {
    if (times === 0) {
      console.log(`Congratulations, ${userName}`);
      return;
    }

    const gameQuestionNum = getRandomNum();

    console.log(`Question: ${gameQuestionNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(gameQuestionNum) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    playGameRound(times - 1);
  };

  playGameRound(gameRoundsCount);
};
