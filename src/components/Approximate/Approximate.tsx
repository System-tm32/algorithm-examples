import React from 'react';
import { difference, intersection } from '../../utils/utils';

const findStation = () => {
  let statesNeeded = new Set<string>([
    'mt',
    'wa',
    'or',
    'id',
    'nv',
    'ut',
    'ca',
    'az',
  ]);

  const stations = {
    kone: new Set(['id', 'nv', 'ut']),
    ktwo: new Set(['wa', 'id', 'mt']),
    kthree: new Set(['or', 'nv', 'ca']),
    kfour: new Set(['nv', 'ut']),
    kfive: new Set(['ca', 'az']),
  };

  const finalStation = new Set();

  while (statesNeeded.size != 0) {
    let bestStation = null;
    let statesCovered = new Set<string>();

    Object.keys(stations).forEach((value: string) => {
      const stationsIndexType = value as keyof typeof stations;

      const covered = intersection<string>(
        statesNeeded,
        stations[stationsIndexType]
      );
      if (covered.size > statesCovered.size) {
        bestStation = stations[stationsIndexType];
        statesCovered = covered;
      }
    });
    statesNeeded = difference<string>(statesCovered, statesNeeded);
    finalStation.add(bestStation);
  }

  return finalStation;
};

const Approximate = () => {
  const result = findStation();
  return <div>result: {result}</div>;
};

export { Approximate };
