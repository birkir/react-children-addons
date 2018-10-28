import { ReactNode, ReactChild, Children, isValidElement, cloneElement } from 'react';
import { isFragment } from 'react-is';

function flattenChildren(children: ReactNode, maxDepth: number, depth: number = 0) {
  return Children.toArray(children).reduce((acc: ReactChild[], node: ReactNode) => {
    if (isFragment(node) && depth < maxDepth) {
      acc.push(...flattenChildren(node.props.children, maxDepth, depth + 1));
    } else {
      if (isValidElement(node)) {
        acc.push(cloneElement(node, {
          key: `${depth}.${node.key}`,
        }));
      }
    }
    return acc;
  }, []);
}

export function toFlatArray(children: React.ReactNode, maxDepth: number = Infinity) {
  return flattenChildren(children, maxDepth);
}