/* exported initial */
function initial(array) {
  const arrayInitial = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (i !== array.length) {
      arrayInitial.push(array[i]);
    }
  }
  return arrayInitial;
}
