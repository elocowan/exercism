// i: any positive integer n
// o: return the number of steps required to reach 1 using steps

// if n is even, divide n by 2 to get n / 2
// if n is odd, multiply n by 3 and add 1 to get 3n + 1

// sample: n = 12
// 0. 12
// 1. 6
// 2. 3
// 3. 10
// 4. 5
// 5. 16
// 6. 8
// 7. 4
// 8. 2
// 9. 1

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