import React from 'react';
import { breadthFirstSearch } from '../../utils/utils';

const personIsSeller = (name: string) => {
  return name[0] == 'p';
};

const graph: Record<string, string[]> = {
  ['you']: ['alice', 'bob', 'claire'],
  ['bob']: ['anuj', 'peggy'],
  ['alice']: ['peggy'],
  ['claire']: ['thom', 'jonny'],
  ['anuj']: [],
  ['peggy']: [],
  ['thom']: [],
  ['jonny']: [],
};

const BreadthFirstSearch = () => {
  return <div>result: {breadthFirstSearch(graph, personIsSeller)}</div>;
};

export { BreadthFirstSearch };
