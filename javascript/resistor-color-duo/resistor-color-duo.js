//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

// will take color names as input and
// output a two digit number, even if the input is more than two colors!

export const decodedValue = (array) => {
  let totalString = '';

  for (var i = 0; i < 2; i++) {
    let currentElement = array[i];
    let currentIndex = colors.indexOf(currentElement);
    totalString += currentIndex.toString();
  }

  return parseInt(totalString);
};

console.log(decodedValue(['brown', 'green'])); // --> 15
console.log(decodedValue(['brown', 'green', 'violet'])); // --> 15
console.log(decodedValue(['brown', 'black'])); // --> 10