import React from 'react';
import { isFragment } from 'react-is';

function flattenChildren(children: React.ReactNode, maxDepth: number, depth: number = 0) {
  return React.Children.toArray(children).reduce((acc: React.ReactChild[], node: React.ReactNode) => {
    if (isFragment(node) && depth < maxDepth) {
      acc.push(...flattenChildren(node.props.children, maxDepth, depth + 1));
    } else {
      if (React.isValidElement(node)) {
        acc.push(React.cloneElement(node, {
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