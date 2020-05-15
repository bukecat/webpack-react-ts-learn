import * as React from 'react';



/* 数组 */
let array_list1: Array<any> = [1, '2', 3]; // right
// let array_list2: Array<number> = [1, '2', 3]; // error，必须全部number类型

let array_list3: any[] = [1, '2', 3]; // right
// let array_list4: Number[] = [1, '2', 3]; // error，必须全部number类型



/* 元组 */
let tuple1: [number, string];
tuple1 = [1, '1']; // right
// tuple1 = ['1', '1']; // error, 必须对应类型

// tuple1[1].substr(1); // right
// tuple1[0].substr(1); // error, number没有substr方法

tuple1[2] = '1';

// tuple1[3] = true;

console.log(tuple1);



/* 枚举 */
enum Color {
  Red, Green, Blue = 4
}

const c: Color = Color.Blue;

export class TsTest extends React.Component{
  render(){
    return <div>{c}</div>
  }
}
