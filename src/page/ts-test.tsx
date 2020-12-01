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

let d: string = '1';
type A = typeof d;
let a: A = '123';
console.log(a);



export class TsTest extends React.Component{
  render(){
    return <div>{d}</div>
  }
}

class Animal {
  #test: string;

  name: string;

  constructor(theName: string) {
    this.name = theName;
  }

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name); // 调用父类的构造函数
  }

  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
sam.move();
