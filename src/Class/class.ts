abstract class Hoge{
    private name: string;
    constructor(name: string){
        this.name = name;
    }
    // constructor(
    //     private name: string
    //     ){}

    Get(): string{
        return this.name;
    }
}

// 抽象クラスのインスタンスは作成できない
//let hoge = new Hoge('aaa');

class ExHoge extends Hoge{}
let exHoge = new ExHoge('aaa');
console.log(exHoge.Get()); // aaa
console.log(exHoge.Get); //[Function: Get]

// 5.3 this return
// let set = new SetC
// set.add(1).add(2).add(3)
class SetC{
    has(value: number): boolean{
        return true;
    }
    add(value: number): this{
        return this;
    }
}

let sc = new SetC();
sc.add(1).add(2).add(3);