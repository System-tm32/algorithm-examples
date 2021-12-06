import React from 'react';
import { BinarySearch } from '../components/BinarySearch/BinarySearch';
import { BreadthFirstSearch } from '../components/BreadthFirstSearch/BreadthFirstSearch';
import { Dijkstra } from '../components/Dijkstra/Dijkstra';
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
        <li>
          BreadthFirstSearch <BreadthFirstSearch />
        </li>
        <li>
          Dijkstra <Dijkstra />
        </li>
      </ul>
    </div>
  );
};

export { Home };
