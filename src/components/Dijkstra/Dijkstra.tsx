import React from 'react';

const graph = {
  ['start']: { ['a']: 6, ['b']: 2 },
  ['a']: { ['fin']: 1 },
  ['b']: { ['a']: 3, ['fin']: 5 },
  ['fin']: {},
};

const costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};

const parents = {
  a: 'start',
  b: 'start',
  in: null,
};

const processed: any = [];

const findLowerCostNode = (costs: any) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  for (let node in costs) {
    const cost = costs[node];
    const isLowerCostAndNotProcessed =
      cost < lowestCost && !processed.includes(node);

    if (isLowerCostAndNotProcessed) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
};

const dijkstra = (node: any): any => {
  if (node == null) return;
  const cost = costs[node];
  const neighbors = graph[node];
  for (let n in neighbors) {
    const newCost = cost + neighbors[n];
    if (costs[n] > newCost) {
      costs[n] = newCost;
      parents[n] = node;
    }
  }
  processed.push(node);
  return dijkstra(findLowerCostNode(costs));
};

const Dijkstra = () => {
  dijkstra(findLowerCostNode(costs));
  return <div>result: {costs.fin}</div>;
};

export { Dijkstra };
