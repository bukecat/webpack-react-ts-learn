class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");


/* public private */
class TheClass1 {
  private pri1: string;

  private priFunc1() {

  }

  public pubFunc1() {

  }
}

let private1 = new TheClass1();
// private1.priFunc1(); // error
private1.pubFunc1();



/* protected  readonly*/
class TheClass2 {
  protected pro1: string = 'pro1';
  readonly read1: number = 1;
}

class theClass3 extends TheClass2{
  constructor() {
    super();
  }

  say() {
    console.log(this.pro1, 'say');
  }
}

let thec1 = new TheClass2();
// thec1.pro1; // error
// thec1.read1 = 2; // error

let thec2 = new theClass3();
thec2.say();


/* 存取器 get  set */
// 只带有 get不带有 set的存取器自动被推断为 readonly



/* 静态属性 static */

class Grid {
  static origin = { x: 0 };

  say() {
    // console.log(this.origin); // error
    console.log(Grid.origin); // right
  }
}



/* 抽象类 abstract*/
// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。

export { greeter };
