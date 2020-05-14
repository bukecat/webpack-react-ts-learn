import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Hello } from "./components/Hello";

import { TsTest } from './page/ts-test';

ReactDom.render(
  <div>
    <Hello compiler="TypeScript" framework="React"/>
    <TsTest/>
  </div>,
  document.getElementById("example")
);
