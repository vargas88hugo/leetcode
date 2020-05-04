/**
 * Ransom Note
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let array = magazine.split('');

  for (const i of ransomNote) {
    const idx = array.indexOf(i);

    if (idx === -1) return false;

    array.splice(idx, 1);
  }

  return true;
};
