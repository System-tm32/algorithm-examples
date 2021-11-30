import React from 'react';
import { binarySearch, binarySearchRecursion } from './Functions';

const BinarySearch = () => {
  const strings = ['kirill', 'fgdjdfg', 'sdfas', 'sdnndf', 's;asd'];
  return <div>result:{binarySearchRecursion<string>('sdfas', strings)}</div>;
};

export { BinarySearch };
