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

export const binarySearch1 = (item: number, list: number[]): number | null => {
  if (list.length == 1) {
    return list[0];
  }
  const mid = Math.floor(list.length / 2);
  const guess = list[mid];
  if (guess === item) return mid;
  if (guess > item) return binarySearch1(item, list.slice(0, mid));
  else return binarySearch1(item, list.slice(mid, list.length));
};
