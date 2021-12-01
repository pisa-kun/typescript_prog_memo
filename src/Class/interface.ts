interface Food{
    calories: number;
    tasty: boolean;
}

interface Sushi extends Food{
    salty: boolean;
}

interface Cake extends Food{
    sweet: boolean;
}

// interfaceの宣言
interface User{name: string}
interface User{age: number}

let us: User = {
    name: 'taisho',
    age: 30
};

// 型エイリアスだと二重宣言になってNG
//type Userr = {name: string}
//type Userr = {age: number}

// interfaceの実装はextends(継承)ではなく、implemented
interface Animal{
    readonly name: string
    eat(food: string): void
    sleep(hours: number): void
}

interface Feline{meow(): void}

// メソッドはpublicにする必要がある
class Cat implements Animal, Feline{

    public readonly name: string;
    public constructor(name: string){
        this.name = name;
    }

    public eat(food: string): void{
        console.log(this.name, 'は', food, 'を食べるよ');
    }

    public sleep(hours: number): void{
        console.log(this.name, 'は', hours, 'h寝るよ')
    }

    public meow(){
        console.log('not implemented');
    }
}

let cat = new Cat('pochi');
cat.eat('saba');
cat.sleep(3);