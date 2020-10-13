export const findAnagrams = (target, matches) => {
  let anagrams = [];

  matches.forEach((word) => {
    if (word.toLowerCase() === target.toLowerCase()) {
      return
    } else if (compare(letters(target), letters(word))) {
      anagrams.push(word);
    }
  });

  return anagrams;
};

export const letters = (word) => {
  let letters = {};
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (!letters[word[i]]) {
      letters[word[i]] = 1;
    } else {
      letters[word[i]]++;
    }
  }

  return letters;
};

export const compare = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};
