/**
 * Jewels and Stones
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  J = J.split('');
  let count = 0;

  for (let i of S) {
    if (J.includes(i)) {
      count++;
    }
  }

  return count;
};
