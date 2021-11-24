import React from 'react';
import { BinarySearch } from '../components/BinarySearch/BinarySearch';

const Home = () => {
  return (
    <div className={'containter'}>
      <ul>
        <li>Binary Search</li>
        <li>
          <BinarySearch />
        </li>
      </ul>
    </div>
  );
};

export { Home };
