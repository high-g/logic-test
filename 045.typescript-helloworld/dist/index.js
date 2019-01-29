// Hello World
var message = 'Hello! TypeScript!';
console.log(message);
// primitive
var a = true;
var b = 1;
var c = 'hello';
var d = null;
console.log(a, b, c, d);
// array
var x = [1, 2, 3];
var y = ['a', 'b', 'c'];
var z = [null, 1, 'b'];
console.log(x, y, z);
// enum(列挙型)
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Red"] = 1] = "Red";
})(Color || (Color = {}));
var enum_a = Color.Blue;
console.log(enum_a);
console.log(enum_a === Color.Blue);
console.log(enum_a === 0);
var BBOY;
(function (BBOY) {
    BBOY[BBOY["Taisuke"] = 10000] = "Taisuke";
    BBOY[BBOY["Ryoma"] = 5000] = "Ryoma";
})(BBOY || (BBOY = {}));
console.log(BBOY.Taisuke);
// normal function
function f1() {
    console.log('message');
}
function f2(x) {
    return x.toLocaleString() + '円';
}
function f3(x, y) {
    if (y === void 0) { y = '円'; }
    return x.toLocaleString() + y;
}
f1();
console.log(f2(100));
console.log(f3(1, 'ペソ'));
// allow function
var add = function (x) { return x + 1; };
var add2 = function (x) {
    return x + 1;
};
console.log('add(1)', add(1));
console.log('add2(2)', add(2));
var A = /** @class */ (function () {
    function A() {
        this.x = 1;
        this.y = 'a';
    }
    return A;
}());
var classA = new A();
console.log('classA', classA);
var aaa = 1;
{
    var aaa_1 = 2;
}
console.log('aaa', aaa);
