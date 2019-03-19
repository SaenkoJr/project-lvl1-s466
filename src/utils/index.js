export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getRandomOperator = (operators, maxDiapason) => {
  const operator = operators[getRandomNum(0, maxDiapason)];
  return operator;
};
