import {
  chunk,
  compact,
  concat,
  difference,
  differenceBy,
  drop,
  dropRight,
} from "./array";

/*
 ** chunk
 */
// console.log(chunk(["a", "b", "c", "d"], 2)); // => [['a', 'b'], ['c', 'd']]
// console.log(chunk(["a", "b", "c", "d"], 3)); // => [['a', 'b', 'c'], ['d']]

/*
 ** compact
 */
// console.log(compact([0, 1, false, 2, "", 3])); // => [1, 2, 3]

/*
 ** concat
 */
// var array = [1];
// var other = concat(array, 2, [3], [[4]]);
// console.log(other); // => [1, 2, 3, [4]]
// console.log(array); // => [1]

/*
 ** difference
 */
// console.log(difference([2, 1], [2, 3])); // => [1]

/*
 ** differenceBy
 */
// console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // => [1.2]

/*
 ** drop
 */
// console.log(drop([1, 2, 3])); // => [2, 3]
// console.log(drop([1, 2, 3], 2)); // => [3]
// console.log(drop([1, 2, 3], 5)); // => []
// console.log(drop([1, 2, 3], 0)); // => [1, 2, 3]

/*
 ** dropRight
 */
console.log(dropRight([1, 2, 3])); // => [1, 2]
console.log(dropRight([1, 2, 3], 2)); // => [1]
console.log(dropRight([1, 2, 3], 5)); // => []
console.log(dropRight([1, 2, 3], 0)); // => [1, 2, 3]
