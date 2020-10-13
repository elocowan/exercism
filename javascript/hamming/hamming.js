export const compute = (left, right) => {
  if (!left.length && !right.length) {
    return 0;
  }

  if (!left.length && right.length) {
    throw 'left strand must not be empty'
  }

  if (!right.length && left.length) {
    throw 'right strand must not be empty'
  }

  if (left.length !== right.length) {
    throw 'left and right strands must be of equal length'
  }

  let hamming = 0;

  for(let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      hamming++;
    }
  }

  return hamming;
};
