// i: DNA strand
// o: RNA complement
// `G` -> `C`
// `C` -> `G`
// `T` -> `A`
// `A` -> `U`

export const translator = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

export const toRna = (dna) => {
  let dnaArray = dna.split('');
  return dnaArray.reduce((acc, cur) => acc + translator[cur], '');
};
