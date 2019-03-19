import readlineSync from 'readline-sync';

export default (description, makeQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description} \n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);

  const rounds = 3;

  const retry = (times) => {
    if (times === 0) {
      console.log(`Congratulations, ${userName}`);
      return;
    }

    const { question, correctAnswer } = makeQuestion();

    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswerMsg = 'Correct!';
    const incorrectAnswerMsg = `'${answer}' is wrong answer ;(.Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;

    if (answer === correctAnswer) {
      console.log(correctAnswerMsg);
      retry(times - 1);
    } else {
      console.log(incorrectAnswerMsg);
    }
  };

  retry(rounds);
};
