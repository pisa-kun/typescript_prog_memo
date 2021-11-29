let ob = {
    name: "Hoge"
}
console.log(ob.name);

// 変数宣言
// ?は string またはundefinedを表す
let obj: {
    firstName: string
    lastName?: string
}

class Person {
    constructor(
        public firstName: string,
        public lastName?: string
    ){}
}

obj = new Person('taro', 'yamada');
console.log(typeof(obj), obj);
obj = {
    firstName:'ccc',
    lastName:'bbb'
}
console.log(typeof(obj), obj);
obj = {firstName:'hoge'};
console.log(typeof(obj), obj);

// 返り値はstring またはnumber
let func = function(a: string, b: number): (string | number){
    return a || b
}