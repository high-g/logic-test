namespace module1 {
  export class foo {}
}

var foo = new module1.foo();
console.log(foo);

var a: boolean = false;
var b: number = 1;
var c: string = 'hello';
var d: any;

// 型推論
var e: any = 123;

// 数値any
var f: any;
f = 111;

var array1: number = [1, 2, 3];



console.log(a, b, c, d, e, f);