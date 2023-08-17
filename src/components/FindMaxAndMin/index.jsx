export const findMaxNumber = (arr) => {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

export const findMinNumber = (arr) => {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
