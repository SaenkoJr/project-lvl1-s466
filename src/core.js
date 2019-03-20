import readlineSync from 'readline-sync';

const gameRoundsCount = 3;

export default (gameDescription, makeGameProcess) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const playGameRound = (rounds) => {
    if (rounds === 0) {
      console.log(`Congratulations, ${userName}`);
      return;
    }

    const { gameQuestion, correctAnswer } = makeGameProcess();

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    playGameRound(rounds - 1);
  };

  playGameRound(gameRoundsCount);
};
