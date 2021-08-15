const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const start = 0;
const end = arr.length - 1;
console.log(search(arr, 1, start, end));

function search($arr, $target, $start, $end) {
  if ($arr[$arr.length - 1] < $target || $start > $end) return 'Element not in the array';
  console.log(arr.slice($start, $end))
  const half = Math.floor(($start + $end) / 2);
  if ($target == $arr[half]) return true;
  else if ($target > $arr[half]) return search($arr, $target, half + 1, $end)
  else return search($arr, $target, $start, half - 1)
}