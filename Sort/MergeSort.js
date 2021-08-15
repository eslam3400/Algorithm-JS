arr = [6, 5, 3, 9, 7, 2, 4, 0, 1];

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const half = Math.floor(arr.length / 2);
  const leftSide = arr.slice(0, half)
  const rightSide = arr.slice(half, arr.length)
  return merge(mergeSort(leftSide), mergeSort(rightSide))
}

function merge(leftArr, rightArr) {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] > rightArr[rightIndex]) result.push(rightArr[rightIndex++]);
    else result.push(leftArr[leftIndex++]);
  }
  return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

console.log(mergeSort(arr))