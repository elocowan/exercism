export const classify = (number) => {
  if (number <= 0) {
    throw "Classification is only possible for natural numbers.";
  }
  if (getAliquot(number) === number) {
    return "perfect";
  } else if (getAliquot(number) > number) {
    return "abundant";
  } else {
    return "deficient";
  }
};

export const getAliquot = (number) => {
  let sum = 0;

  for (var i = 0; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
};
