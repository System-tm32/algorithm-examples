import React from 'react';
import { unsortedArrayNumbers } from '../../constants/constants';
import { quickSort } from '../../utils/utils';

const QuickSort = () => {
  return <div>result:{quickSort(unsortedArrayNumbers)} </div>;
};

export { QuickSort };
