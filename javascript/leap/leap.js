// i: year
// o: boolean (is leap year or is not leap year)

// on every year that is evenly divisible by 4 except every year that is evenly divisible by 100 unless the year is also evenly divisible by 400

// 1997 is not a leap year, but 1996 is.  1900 is not a leap year, but 2000 is.

export const isLeap = (year) => {
  let isDivisibleBy4 = (year % 4 === 0);
  let isDivisibleBy100 = (year % 100 === 0);
  let isDivisibleBy400 = (year % 400 === 0);

  if (isDivisibleBy4 && (!isDivisibleBy100 || isDivisibleBy400)) {
    return true;
  }

  return false;
};