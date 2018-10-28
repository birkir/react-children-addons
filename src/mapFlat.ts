import React from 'react';
import { toFlatArray } from './toFlatArray';

export function mapFlat(children: React.ReactNode, fn: (child: React.ReactChild, index: number) => React.ReactChild, maxDepth?: number) {
  return toFlatArray(children, maxDepth).map(fn);
}
