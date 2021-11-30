type Context = {
    appId?: string
    userId?: string
}

function log(message: string, context: Context = {}){
    let time = new Date().toISOString();
    console.log(time, message, context.userId);
}

log("hoge");
log("test", {"appId":"test"});
log("test", {appId:"test"});
log("test", {appId:"test", userId:"aaaa"});

// function greet(name: string)
type Greet = (name: string) => string

// type Greetは型エイリアス
let fun: Greet = function(name: string){
    return name;
}

// string引数2つ(userIdはオプション)で返り値がvoidの関数型
type Log = (message: string, userId?: string) => void
let l: Log = (m:string, uI?: string) => {
    let time = new Date().toISOString();
    console.log(time, m, uI);
}
l("poyo-n", "aaa");
l("poyo-n2");

// コールバック関数
function times(
    f: (index: number) => void,
    n: number
){
    for(let i = 0; i < n; i++){
        f(i);
    }
}
console.log("callback test");
times(i => console.log("this is ", i), 10);

type WarnUser = {
    (warning: string): void
    wasCalled: boolean
}
