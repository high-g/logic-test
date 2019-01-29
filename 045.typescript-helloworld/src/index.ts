// Hello World
const message:string = 'Hello! TypeScript!'

console.log(message)


// primitive
const a: boolean = true
const b: number = 1
const c: string = 'hello'
const d: any = null

console.log(a, b, c, d)


// array
const x: number[] = [1, 2, 3]
const y: string[] = ['a', 'b', 'c']
const z: any[] = [null, 1 , 'b']

console.log(x, y, z)


// enum(列挙型)
enum Color {Blue, Red}
const enum_a: Color = Color.Blue

console.log(enum_a)
console.log(enum_a === Color.Blue)
console.log(enum_a === 0)

enum BBOY {Taisuke=10000,Ryoma=5000}
console.log(BBOY.Taisuke)


// normal function
function f1(): void {
  console.log('message')
}

function f2(x: number): string {
  return x.toLocaleString() + '円'
}

function f3(x: number, y:string = '円'): string {
  return x.toLocaleString() + y
}

f1()
console.log(f2(100))
console.log(f3(1, 'ペソ'))


// allow function
const add = (x: number): number => x+1;

const add2 = (x: number): number => {
  return x+1;
}

console.log('add(1)', add(1))
console.log('add2(2)', add(2))

class A {
  private x: number = 1
  public y: string = 'a'

  constructor() {
    
  }
}

const classA: A = new A()

console.log('classA', classA)


let aaa = 1
{
  let aaa = 2
}
console.log('aaa',aaa)