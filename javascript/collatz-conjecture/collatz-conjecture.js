export const steps = (int) => {
  if (int <= 0) {
    throw "Only positive numbers are allowed";
  }
  let count = 0;
  while (int !== 1) {
    if (int % 2 === 0) {
      int /= 2;
    } else {
      int = int * 3 + 1;
    }
    count++
  }
  return count;
};