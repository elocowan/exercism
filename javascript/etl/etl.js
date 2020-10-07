
export const transform = (oldObj) => {
  let newObj = {};

  for (let key in oldObj) {
    oldObj[key].map((el) => {
      newObj[el.toLowerCase()] = parseInt(key);
    })
  }

  return newObj;
};
