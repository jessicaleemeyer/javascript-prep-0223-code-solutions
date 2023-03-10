/* exported capitalize */
function capitalize(word) {
  const capitalizedFirst = word.charAt(0).toUpperCase();
  const rest = word.slice(1).toLowerCase();
  return capitalizedFirst + rest;
}
