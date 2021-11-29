export const binarySearch = (item: number, list: number[]): Number | null => {
  let low = 0;
  let hight = list.length;

  while (low <= hight) {
    const mid = Math.floor((low + hight) / 2);
    const guess = list[mid];
    if (guess == item) return mid;
    if (guess > item) hight = mid - 1;
    else low = mid + 1;
  }
  return null;
};

export const binarySearchRecursion = <T extends {}>(
  item: T,
  list: T[]
): T | null => {
  if (list.length == 1) {
    return null;
  }

  let half = null;
  const mid = Math.floor(list.length / 2);
  const guess = list[mid];

  if (guess === item) return guess;

  if (guess > item) half = list.slice(0, mid);
  else half = list.slice(mid, list.length);

  return binarySearchRecursion(item, half);
};
