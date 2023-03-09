/* exported tail */
function tail(array) {
  const arrayCopy = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      arrayCopy.push(array[i]);
    }
  }
  return arrayCopy;
}
