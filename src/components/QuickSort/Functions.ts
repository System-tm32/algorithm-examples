export const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  const mid: number = Math.floor(arr.length / 2);
  const pivot = arr[mid];

  const less = arr.filter((number) => number < pivot);
  const greater = arr.filter((number) => number > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

export const selectionSort = (array: number[]): number[] => {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    const tmp = array[min];
    array[min] = array[i];
    array[i] = tmp;
  }

  return array;
};

export const sum = (arr: number[]): number => {
  if (arr.length == 0) return 0;

  const [head, ...tail] = arr;
  return head + sum(tail);
};

export const lengthArray = (arr: number[]): number => {
  if (arr.length == 0) return 0;

  arr.pop();
  return 1 + lengthArray(arr);
};
