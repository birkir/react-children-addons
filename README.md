![](https://img.shields.io/npm/v/react-children-addons.svg?&style=flat-square) ![](https://img.shields.io/bundlephobia/min/react-children-addons.svg?&style=flat-square) ![](https://img.shields.io/npm/l/react-children-addons.svg?&style=flat-square) ![](https://img.shields.io/david/birkir/react-children-addons.svg?&style=flat-square)  ![](https://img.shields.io/npm/dw/react-children-addons.svg?&style=flat-square)
# react-children-addons

React children utilities and addons

 - toFlatArray
 - mapFlat

### toFlatArray

```jsx
import { toFlatArray } from 'react-children-addons';

function List({ children }) {
  console.log(children);
}

<List>
  <li>Item</li>
  <>
    <li>Another Item</li>
  </>
</List>

// =>

[<li>Item</li>, <li>Another Item</li>]

```

### mapFlat

```jsx
import React from 'react';
import { mapFlat } from 'react-children-addons';

function List({ children }) {
  return (
    <ul>
      {mapFlat(children, child => React.cloneElement(child, { className: 'link' }))}
    </ul>
  );
}

<List>
  <li>Item</li>
  <>
    <li>Another Item</li>
  </>
</List>

// =>

<ul>
  <li class="link">Item</li>
  <li class="link">Another Item</li>
</ul>
```
