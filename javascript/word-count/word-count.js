export const countWords = (string) => {
  return string
    .toLowerCase()
    .match(/([0-9]|[a-z]+('[a-z]+)?)/g)
    .reduce((acc, word) => {
      if (acc[word]) {
        acc[word]++;
      } else {
        acc[word] = 1
      }
      return acc
    }, {});
};