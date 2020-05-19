import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Hello } from "./components/Hello";

import { BasicTypes } from './page/basic-types';

import { MyFunctions } from './page/functions';

ReactDom.render(
  <div>
    <Hello compiler="TypeScript" framework="React"/>
    <BasicTypes/>
    <MyFunctions/>
  </div>,
  document.getElementById("example")
);
