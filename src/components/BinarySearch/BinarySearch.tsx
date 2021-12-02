import React from 'react';
import { unsortedArrayStrings } from '../../constants/constants';
import { binarySearchRecursion } from '../../utils/utils';

const BinarySearch = () => {
  return (
    <div>
      result:
      {binarySearchRecursion<string>('Tom', unsortedArrayStrings).toString()}
    </div>
  );
};

export { BinarySearch };
