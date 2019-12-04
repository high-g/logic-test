var User = /** @class */ (function () {
    function User() {
        console.log('hello world');
        // typescript
        var x = 20;
        // x = 'string' // error
        console.log(x);
        // 型
        /*
        number
        string
        boolean
        any
        */
        var i;
        var i = 10;
        var i = 10; // i: number 型推論
        console.log(i);
        var j; // j: any any型
        j = 10;
        j = 'hello'; // この場合もany
        console.log(j);
        var results; // 数値のみを格納する配列
        results = [1, 2, 3];
        console.log(results);
        // 列挙型
        // Signal型というものを作ってみる
        // 慣習的に１文字目は大文字
        var Signal;
        (function (Signal) {
            Signal[Signal["Red"] = 0] = "Red";
            Signal[Signal["Blue"] = 1] = "Blue";
            Signal[Signal["Yellow"] = 2] = "Yellow";
        })(Signal || (Signal = {}));
        var Signal2;
        (function (Signal2) {
            Signal2[Signal2["Red"] = 0] = "Red";
            Signal2[Signal2["Blue"] = 3] = "Blue";
            Signal2[Signal2["Yellow"] = 4] = "Yellow"; // 4
        })(Signal2 || (Signal2 = {}));
        var result;
        // if (res === Signal.Yellow)
        // if (res === Signal['Yellow'])
        console.log(Signal[2]); // Yellow
        console.log(Signal2);
        // 関数
        // 関数名(a: 型, b: 型): 返り値の型
        // 型以外の値をいれるとエラー
        function add(a, b) {
            return a + b;
        }
        console.log(add(5, 1));
        //console.log(add(5, 'str'))
        // 返り値がない関数
        function addVoid(a, b) {
            console.log(a + b);
        }
        addVoid(5, 10);
        // ? オプションと呼ぶ。必須でなくなる。
        function add2(a, b) {
            if (b) {
                console.log(a + b);
            }
            else {
                console.log(a + a);
            }
        }
        add2(3);
        function add3(a, b) {
            if (b === void 0) { b = 10; }
            console.log(a + b);
        }
        add3(2);
    }
    return User;
}());
new User();
