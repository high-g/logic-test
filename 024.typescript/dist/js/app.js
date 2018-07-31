var module1;
(function (module1) {
    var foo = (function () {
        function foo() {
        }
        return foo;
    })();
    module1.foo = foo;
})(module1 || (module1 = {}));
var foo = new module1.foo();
console.log(foo);
var a = false;
var b = 1;
var c = 'hello';
var d;
// 型推論
var e = 123;
// 数値any
var f;
f = 111;
var array1 = [1, 2, 3];
console.log(a, b, c, d, e, f);
