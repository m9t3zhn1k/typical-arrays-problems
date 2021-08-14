
exports.min = function min (array) {
  let minItem = 0;
  if (!array) return 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minItem) minItem = array[i];
  }
  return minItem;
}

exports.max = function max (array) {
  let maxItem = 0;
  if (!array) return 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxItem) maxItem = array[i];
  }
  return maxItem;
}

exports.avg = function avg (array) {
  let sum = 0;
  let result = 0;
  if (!array || array.length < 1) return 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  result = sum / array.length;
  return result;
}
