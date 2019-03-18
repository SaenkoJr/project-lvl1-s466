import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;

const isCorrectAnswer = (answer, num) => {
  switch (answer) {
    case 'yes':
      return isEven(num);
    case 'no':
      return !isEven(num);
    default:
      return false;
  }
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const correctAnswerMsg = 'Correct!';
  const incorrectAnswerMsg = (answer) => {
    const correctAnswer = answer === 'yes' ? 'no' : 'yes';
    return `'${answer}' is wrong answer ;(.\nCorrect answer was '${correctAnswer}'. Let's try again, ${userName}!`;
  };

  const questionsCount = 3;

  const retry = (times) => {
    if (times === 0) {
      console.log(`Congratulations, ${userName}`);
      return;
    }

    const randomNum = Math.floor(Math.random() * 100);

    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (isCorrectAnswer(answer, randomNum)) {
      console.log(correctAnswerMsg);
      retry(times - 1);
    } else {
      console.log(incorrectAnswerMsg(answer));
    }
  };

  retry(questionsCount);
};
