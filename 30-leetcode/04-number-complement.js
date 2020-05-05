/**
 * Number Complement
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
  let str = num.toString(2);
  let bin = '';

  for (let i of str) {
    if (i === '0') {
      bin += '1';
    } else {
      bin += '0';
    }
  }

  return parseInt(bin, 2);
};
