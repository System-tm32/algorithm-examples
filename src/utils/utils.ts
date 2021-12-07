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
): Boolean => {
  if (list.length == 1) {
    return false;
  }

  let half: T[] | null = null;
  const mid: number = Math.floor(list.length / 2);
  const guess: T = list[mid];

  if (guess === item) return true;

  if (guess > item) half = list.slice(0, mid);
  else half = list.slice(mid, list.length);

  return binarySearchRecursion(item, half);
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

export const breadthFirstSearch = (
  graph: Record<string, string[]>,
  searchRule: (name: string) => Boolean
) => {
  const searchQueue = [...graph['you']];
  const searched: (string | undefined)[] = [];

  const iter = (queue: string[]): string | null => {
    if (queue.length == 0) {
      return null;
    }

    const person = queue.shift();

    if (!searched.includes(person))
      if (searchRule(person!)) return person!;
      else {
        searched.push(person);
        return iter([...queue, ...graph[person!]]);
      }
    else return iter(queue);
  };

  return iter(searchQueue);
};
