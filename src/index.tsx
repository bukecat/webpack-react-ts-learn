import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Hello } from "./components/Hello";


import greeter from './page/class';

console.log(greeter.greet());







ReactDom.render(
  <div>
    <Hello compiler="TypeScript" framework="React"/>
  </div>,
  document.getElementById("example")
);
