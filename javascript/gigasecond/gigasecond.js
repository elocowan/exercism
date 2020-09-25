// i: Given a moment,
// o: the moment that would be after a gigasecond has passed (10^9 seconds)
// c: don't mutate function argument
// e:

export const gigasecond = (date) => {
  // getTime() returns the number of milliseconds since the UNIX epoch -- will work even if before UNIX epoch (returns negative number)
  let startTime = date.getTime();
  // add 10**12 milliseconds
  let endTime = startTime + (10**12);
  // make a new Date for that number of milliseconds relative to the UNIX epoch
  return new Date(endTime);
};