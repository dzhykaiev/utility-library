import {
  chunk,
  compact,
  concat,
  difference,
  differenceBy,
  drop,
  dropRight,
  fill,
} from "./array";

describe("Tests for 'Array' methods - chunk.", () => {
  test(`chunk(["a", "b", "c", "d"], 2) => [['a', 'b'], ['c', 'd']]`, () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toEqual(
      expect.arrayContaining([
        ["a", "b"],
        ["c", "d"],
      ])
    );
  });
  test(`chunk(["a", "b", "c", "d"], 3) => [['a', 'b', 'c'], ['d']]`, () => {
    expect(chunk(["a", "b", "c", "d"], 3)).toEqual(
      expect.arrayContaining([["a", "b", "c"], ["d"]])
    );
  });
});

describe("Tests for 'Array' methods - compact.", () => {
  test(`compact([0, 1, false, 2, "", 3]) => [1, 2, 3]`, () => {
    expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
  });
});

describe("Tests for 'Array' methods - concat.", () => {
  test(`concat(array, 2, [3], [[4]]) => [1, 2, 3, [4]]`, () => {
    const array = [1];
    expect(concat(array, 2, [3], [[4]])).toEqual([1, 2, 3, [4]]);
    expect(array).toEqual([1]);
  });
});

describe("Tests for 'Array' methods - difference.", () => {
  test(`difference([2, 1], [2, 3]) => [1]`, () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });
});

describe("Tests for 'Array' methods - differenceBy.", () => {
  test(`differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) => [1.2]`, () => {
    expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
  });
});

describe("Tests for 'Array' methods - drop.", () => {
  test(`drop([1, 2, 3]) => [2, 3]`, () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });
  test(`drop([1, 2, 3], 2) => [3]`, () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });
  test(`drop([1, 2, 3], 5) => []`, () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });
  test(`drop([1, 2, 3], 0) => [1, 2, 3]`, () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
});

describe("Tests for 'Array' methods - dropRight.", () => {
  test(`dropRight([1, 2, 3]) => [1, 2]`, () => {
    expect(dropRight([1, 2, 3])).toEqual([1, 2]);
  });
  test(`dropRight([1, 2, 3], 2) => [1]`, () => {
    expect(dropRight([1, 2, 3], 2)).toEqual([1]);
  });
  test(`dropRight([1, 2, 3], 5) => []`, () => {
    expect(dropRight([1, 2, 3], 5)).toEqual([]);
  });
  test(`dropRight([1, 2, 3], 0) => [1, 2, 3]`, () => {
    expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
});

describe("Tests for 'Array' methods - fill.", () => {
  test(`fill(array, "a") => ['a', 'a', 'a']`, () => {
    let array = [1, 2, 3];
    fill(array, "a");
    expect(array).toEqual(["a", "a", "a"]);
  });
  test(`fill(Array(3), 2) => [2, 2, 2]`, () => {
    expect(fill(Array(3), 2)).toEqual([2, 2, 2]);
  });
  test(`fill([4, 6, 8, 10], "*", 1, 3) => [4, '*', '*', 10]`, () => {
    expect(fill([4, 6, 8, 10], "*", 1, 3)).toEqual([4, "*", "*", 10]);
  });
});
