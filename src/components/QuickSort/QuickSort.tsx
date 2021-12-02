import React from 'react';
import { lengthArray, quickSort, selectionSort, sum } from './Functions';

const QuickSort = () => {
  const numbers = [2, 3, 4, 77, 9, 2, 5, 7, 9, 1];
  return <div>result:{quickSort(numbers)} </div>;
};

export { QuickSort };
