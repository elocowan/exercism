//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// create a way:
// to look up the numerical value associated with a particular color band
// to list the different band colors

// input: color
// output: numerical value of that band
// constraints: what type of data structure will contain the colors?
// edge cases: capitalization?

// original solution used an object of colors, not an array

// if no color is specified, return the keys of the Colors object so user can see what their choices are

// PseudoCode for Object Solution
// if COLORS[color] is truthy
  // return COLORS[color]
// return Object.keys(COLORS), (maybe with a message that these are the available colors)

// samples:
// colorCode("green") --> 5
// colorCode() --> array of colors
// colorCode("Maroon") --> array of colors

// changed code to use an array of colors to match the pre-written tests

export const colorCode = (color) => {
  if (COLORS.indexOf(color) !== -1) {
    return COLORS.indexOf(color);
  }
  return `choose a color from the following list: ${COLORS}`
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]