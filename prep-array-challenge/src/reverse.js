/* exported reverse */
function reverse(array) {
  const arrayReverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayReverse.push(array[i]);
  }
  return arrayReverse;
}
