// 必须包含一个label属性且类型为string
interface LabelledValue {
  label?: string;
  name?: string;
  index?: number;
  [propsName: string]: any
}

function printLabel(labelledObj: LabelledValue): { label: string, index: number} {
  // if (labelledObj.abc) { // error
  //
  // }
  return {
    label: labelledObj.label,
    // name: labelledObj.name,
    index: labelledObj.index
  };
}

let myObj = {size: 10, label: '123', name: '456', index: 1};




/* 只读属性 */
interface Obj {
  readonly x: number;
  readonly y: string;
}

let obj1: Obj = {
  x: 1,
  y: '2'
};
// obj1.x = 2; // error, 只读




/* ReadonlyArray<T> */
let arr: ReadonlyArray<string> = ['1', '2'];
// arr[0] = '11'; // error

// 可以用类型断言重写：
let arr2 = arr as string[];


printLabel({size: 10, label: '123', name: '456', index: 1, size2: ''}).label;

printLabel({size: 10, label: '123', name: '456', index: 1} as LabelledValue).label;

printLabel(myObj).label;
