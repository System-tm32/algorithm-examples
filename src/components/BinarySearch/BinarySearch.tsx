import React from 'react';
import { binarySearch, binarySearch1 } from './Functions';

const BinarySearch = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
  return <div>result:{binarySearch1(5, numbers)}</div>;
};

export { BinarySearch };
