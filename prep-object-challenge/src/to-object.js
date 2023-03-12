/* exported toObject */
function toObject(keyValuePair) {
  const jessie = {};
  for (let i = 0; i < keyValuePair.length; i++) {
    if (i > 0) {
      jessie[keyValuePair[i - 1]] = keyValuePair[i];
    }
  }
  return jessie;
}
