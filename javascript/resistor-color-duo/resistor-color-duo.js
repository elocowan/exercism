export const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

// will take color names as input and
// output a two digit number, even if the input is more than two colors!

export const decodedValue = (array) => {
  let totalString = array.reduce((acc, cur) => {return acc + colors.indexOf(cur)}, '');

  let firstTwo = totalString.slice(0,2);
  return parseInt(firstTwo);
};