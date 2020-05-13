import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Hello } from "./components/Hello";

console.log('123');

ReactDom.render(
  <Hello compiler="TypeScript" framework="React"/>,
  document.getElementById("example")
);
