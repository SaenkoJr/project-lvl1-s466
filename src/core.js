import readlineSync from 'readline-sync';

const gameRoundsCount = 3;

export default (gameDescription, makeGameQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription} \n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);

  const playGameRound = (times) => {
    if (times === 0) {
      console.log(`Congratulations, ${userName}`);
      return;
    }

    const { gameQuestion, correctAnswer } = makeGameQuestion();

    console.log(gameQuestion);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    playGameRound(times - 1);
  };

  playGameRound(gameRoundsCount);
};
