import { ReactNode, ReactChild } from 'react';
import { toFlatArray } from './toFlatArray';

export function mapFlat(children: ReactNode, fn: (child: React.ReactChild, index: number) => ReactChild, maxDepth?: number) {
  return toFlatArray(children, maxDepth).map(fn);
}
