import React from 'react';
import { BinarySearch } from '../components/BinarySearch/BinarySearch';
import { QuickSort } from '../components/QuickSort/QuickSort';

const Home = () => {
  return (
    <div className={'containter'}>
      <ul>
        <li>
          Binary Search <BinarySearch />
        </li>
        <li>
          Quick Sort <QuickSort />
        </li>
      </ul>
    </div>
  );
};

export { Home };
