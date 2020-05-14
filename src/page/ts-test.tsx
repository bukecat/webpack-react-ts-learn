import * as React from 'react';

enum Color {
  Red, Green, Blue = 4
}

const c: Color = Color.Blue;

export class TsTest extends React.Component{
  render(){
    return <div>{c}</div>
  }
}
