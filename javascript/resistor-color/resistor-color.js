//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// create a way:
// to look up the numerical value associated with a particular color band
// to list the different band colors

// input: color
// output: numerical value of that band
// constraints
// edge cases: capitalization

// if no color is specified, return the keys of the Colors object so user can see what their choices are

// define COLORS as an object full of color keys with associated values

// PseudoCode
// if COLORS[color] is truthy
  // return COLORS[color]
// return Object.keys(COLORS), (maybe with a message that these are the available colors)

// samples:
// colorCode("Green") --> 5
// colorCode() --> array of colors
// colorCode("Maroon") --> array of colors

// export
const colorCode = (color) => {
  if (COLORS[color]) {
    return COLORS[color];
  }
  return Object.keys(COLORS);
};

// export
const COLORS = {
  Black: 0,
  Brown: 1,
  Red: 2,
  Orange: 3,
  Yellow: 4,
  Green: 5,
  Blue: 6,
  Violet: 7,
  Grey: 8,
  White: 9
};

console.log(colorCode("Green"));
console.log(colorCode());
console.log(colorCode("Maroon"));