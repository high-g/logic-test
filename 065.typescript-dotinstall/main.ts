class User {
  constructor() {
    console.log('hello world')

    // typescript
    let x:number = 20
    // x = 'string' // error
    console.log(x)

    // 型

    /*
    number
    string
    boolean
    any
    */

    var i: number
    var i: number = 10
    var i = 10 // i: number 型推論
    console.log(i)

    var j // j: any any型
    j = 10
    j = 'hello' // この場合もany
    console.log(j)

    var results:number[] // 数値のみを格納する配列
    results = [1, 2, 3]
    console.log(results)

    // 列挙型
    // Signal型というものを作ってみる
    // 慣習的に１文字目は大文字
    enum Signal {
      Red = 0,
      Blue = 1,
      Yellow = 2
    }

    enum Signal2 {
      Red, // 0
      Blue = 3,
      Yellow // 4
    }

    var result: Signal
    // if (res === Signal.Yellow)
    // if (res === Signal['Yellow'])
    console.log(Signal[2]) // Yellow
    console.log(Signal2)


    // 関数
    // 関数名(a: 型, b: 型): 返り値の型
    // 型以外の値をいれるとエラー
    function add(a: number, b: number): number {
      return a + b
    }
    console.log(add(5, 4))
    //console.log(add(5, 'str'))

    // 返り値がない関数
    function addVoid(a: number, b: number): void {
      console.log(a + b)
    }
    addVoid(5,10)

    // ? オプションと呼ぶ。必須でなくなる。
    function add2(a: number, b?: number): void {
      if(b) {
        console.log(a + b)
      } else {
        console.log(a + a)
      }
    }
    add2(3)

    function add3(a: number, b: number = 10): void {
      console.log(a + b)
    }
    add3(2)
  }
}

new User()
