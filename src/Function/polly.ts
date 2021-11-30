// type Filter = {
//     (array: number[], f: (item: number)=> boolean): number[]
//     (array: string[], f: (item: string)=> boolean): string[]
// }

// ジェネリック型
type Filter = {
    <T>(array: T[], f: (item:T) => boolean): T[]
}

let fill: Filter = (array, f) => {
    let result = []
    for (let i = 0; i < array.length; i++){
        let item = array[i];
        if( f(item)) {
            result.push(item);
        }
    }
    return result;
}

let r = fill([1,2,3,4,5], _ => _ > 2);
console.log(r);
let r2 = fill(['a', 'b', 'c', 'd'], _ => _ !== 'b');
console.log(r2);

// 複数の制約をもつ制限付きポリモーフィズム
type HasSides = {numberOfSides: number}
type SidesHaveLength = {sideLength: number}

// ShapeはHasSidesとSidesHaveLengthの両方を拡張するジェネリック
function logPerimeter<Shape extends HasSides & SidesHaveLength>(s: Shape): Shape{
    console.log(s.numberOfSides * s.sideLength);
    return s
}

type Square = HasSides & SidesHaveLength;
let square: Square = {numberOfSides:4, sideLength:3};
logPerimeter(square);