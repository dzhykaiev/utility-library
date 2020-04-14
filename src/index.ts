export const chunk = function <T>(array: T[], size: number): T[] {
  const s = size || 1;
  let result = new Array();

  for (let i = 0; i < array.length; i++) {
    if (i % s === 0) {
      result = [...result, array.slice(i, i + s)];
    }
  }

  return result;
};

// console.log(chunk(["a", "b", "c", "d"], 2)); // => [['a', 'b'], ['c', 'd']]
// console.log(chunk(["a", "b", "c", "d"], 3)); // => [['a', 'b', 'c'], ['d']]

export const compact = function <T>(array: T[]): T[] {
  return array.filter((item) => {
    return Boolean(item);
  });
};

// console.log(compact([0, 1, false, 2, "", 3])); // => [1, 2, 3]

export const concat = function <T, U extends any[]>(array: T[], ...values: U) {
  return values.reduce((acc, cur) => {
    return acc.concat(cur);
  }, array);
};

// var array = [1];
// var other = concat(array, 2, [3], [[4]]);
// console.log(other); // => [1, 2, 3, [4]]
// console.log(array); // => [1]

export const difference = function <T>(array: T[], values: T[]) {
  return array.filter((element) => !values.includes(element));
};

// console.log(difference([2, 1], [2, 3])); // => [1]

export const differenceBy = function <T>(
  array: T[],
  values: T[],
  iteratee: any
) {
  return array.filter((element) => {
    return values.every((value) => {
      return iteratee(value) != iteratee(element);
    });
  });
};

// console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // => [1.2]
