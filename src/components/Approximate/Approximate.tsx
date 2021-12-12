import React from 'react';

const Approximate = () => {
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

    type Tstations = keyof typeof stations;
    Object.keys(stations).forEach((value: string) => {
      const stationsIndexType = value as keyof typeof stations;

      const covered = intersection(statesNeeded, stations[stationsIndexType]);
      if (covered.size > statesCovered.size) {
        bestStation = stations[stationsIndexType];
        statesCovered = covered;
      }
    });
    statesNeeded = difference<string>(statesCovered, statesNeeded);
    finalStation.add(bestStation);
  }

  return <div>result: {finalStation}</div>;
};

export { Approximate };

function intersection<T>(setA: Set<T>, setB: Set<T>): any {
  let smallerSet = setA.size > setB.size ? setB : setA;
  let largerSet = setA.size > setB.size ? setA : setB;
  return new Set([...smallerSet].filter((element) => largerSet.has(element)));
}

function union<T>(setA: Set<T>, setB: Set<T>) {
  return new Set([...setA, ...setB]);
}

function difference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  return new Set([...setA].filter((element) => !setB.has(element)));
}
