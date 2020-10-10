export const countWords = (string) => {
  let punctuationless = string.replace(/[.\/#!$%@\^&\*;:{}=\-_`~()]/g,"");
  let finalString = punctuationless.replace(/\s{2,}/g," ");
  let wordArray = finalString.trim().toLowerCase().split(/[\s,]+/)
  console.log(wordArray);
  return wordArray.reduce((acc, word) => {
    if (acc[word]) {
      acc[word]++;
    } else {
      acc[word] = 1
    }
    return acc
  }, {});
};