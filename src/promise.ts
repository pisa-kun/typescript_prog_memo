// new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void,
// reject: (reason?: any) => void) => void): Promise<T>;
let promise = new Promise((resolve, _) => {
    setTimeout(() => {
        console.log('Hello');

        // Promise終了
        // T型のvalueまたはPromiseLikeを受け取る必要がある
        resolve("end");
    }, 2000);
});
// then は Promiseがresolveされたあとに登録された関数を呼ぶ。
let world = () => console.log(`World!`);
promise.then(word => {
    console.log(word);
    world();
});
// promise.then(world);

// resolveの引数を空にしたい場合
let p = new Promise<void>((resolve, _) => {
    setTimeout(() =>{
        console.log('test');
        resolve();
    },2000);
});
let fin = () => console.log('fin');
p.then(_ => fin());
// p.then(fin);