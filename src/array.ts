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

export const compact = function <T>(array: T[]): T[] {
  return array.filter((item) => {
    return Boolean(item);
  });
};

export const concat = function <T, U extends any[]>(array: T[], ...values: U) {
  return values.reduce((acc, cur) => {
    return acc.concat(cur);
  }, array);
};

export const difference = function <T>(array: T[], values: T[]) {
  return array.filter((element) => !values.includes(element));
};

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

// TODO: add differenceWith method

export const drop = <T>(array: T[], n: number = 1) => {
  array.splice(0, n);
  return array;
};

export const dropRight = <T>(array: T[], n: number = 1) => {
  n ? array.splice(-n) : null;
  return array;
};

// TODO: add dropRightWhile method
// TODO: add dropWhile method

export const fill = <T>(
  array: T[],
  value: any,
  start = 0,
  end = array.length
) => {
  return array.fill(value, start, end);
};
