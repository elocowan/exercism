//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// i: name
// o: a string with message -- "One for X, one for me."
// c:
// e: if name is missing, return "One for you, one for me", what if name is not a string?

// samples:
  // twoFer(Alice) --> "One for Alice, one for me."
  // twoFer(Bob) --> "One for Bob, one for me."
  // twoFer() --> "One for you, one for me."


// psuedocode
  // if name is undefined
    // return "One for you, one for me."
  // return `One for ${name}, one for me.`

export const twoFer = (name) => {
  if (!name) {
    return "One for you, one for me."
  }

  if (typeof name === "string") {
    return `One for ${name}, one for me.`
  }
};

console.log(twoFer("Alice"));
console.log(twoFer());