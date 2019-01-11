![](https://img.shields.io/npm/v/react-children-addons.svg?&style=flat-square) ![](https://img.shields.io/bundlephobia/min/react-children-addons.svg?&style=flat-square) ![](https://img.shields.io/npm/l/react-children-addons.svg?&style=flat-square) ![](https://img.shields.io/david/birkir/react-children-addons.svg?&style=flat-square)  ![](https://img.shields.io/npm/dw/react-children-addons.svg?&style=flat-square)
# react-children-addons

React children utilities and addons

```bash
npm install react-children-addons -S

# or

yarn add react-children-addons -S
```

## API Methods
 - [toFlatArray](#toflatarray)
 - [mapFlat](#mapflat)

### toFlatArray

Takes children and flattens all React.Fragments into a single array

```jsx
import { toFlatArray } from 'react-children-addons';

function List({ children }) {
  console.log(toFlatArray(children));
}

<List>
  <li>Item</li>
  <>
    <li>Another Item</li>
  </>
</List>
```
```jsx
[<li>Item</li>, <li>Another Item</li>]
```

### mapFlat

Same as `toFlatArray` but with a map function

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
  <React.Fragment>
    <>
      <li>Nested Item</li>
    </>
  </React.Fragment>
</List>
```
```html
<ul>
  <li class="link">Item</li>
  <li class="link">Another Item</li>
  <li class="link">Nested Item</li>
</ul>
```


## Todo

Add tests, changelog and more ideas for addons.
