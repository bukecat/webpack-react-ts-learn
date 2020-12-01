import * as React from 'react';



/* 数组 */
let array_list1: Array<any> = [1, '2', 3]; // right
// let array_list2: Array<number> = [1, '2', 3]; // error，必须全部number类型

let array_list3: any[] = [1, '2', 3]; // right
// let array_list4: Number[] = [1, '2', 3]; // error，必须全部number类型



/* 元组 */
let tuple1: [number, string];
tuple1 = [1, '2']; // right
// tuple1 = ['1', '1']; // error, 必须对应类型

// tuple1[1].substr(1); // right
// tuple1[0].substr(1); // error, number没有substr方法

// tuple1[2] = '1'; // error

// tuple1[3] = true; // error



/* 枚举 */
enum Color {
  Red, Green = 'green', Blue = 4
}

let enum1: Color = Color.Blue;

let enum2: string = Color.Green;



/* Any 为那些在编程阶段还不清楚类型的变量指定一个类型 */
let any1: any = 123;
let any2: any = '123';



/* Void */
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function fun1(): void {
  // return '1'; // error
  console.log();
}

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
// let void1: void = '1'; // error

let void2: void = undefined; // right
let void3: void = null; // right



/* Never */
// let a: never = 1; // error
let a = function fun2(): never {
  throw new Error('1');
};



/* Object */
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
let object1: object = null;



/* 类型断言 */
// 类型断言有两种形式。 其一是“尖括号”语法：
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length; // 当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。

// as语法
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
