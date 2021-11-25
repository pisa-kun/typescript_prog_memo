## typescriptのメモ

気になった部分をメモしていく

#### 環境構築
https://qiita.com/Yuki-Kurita/items/5e449e2c05aaeeef80ac

1. npm init -y
1. npm install --save-dev typescript tslint @types/node
1. ./node_modules/.bin/tslint --init // tslint初期化
1. npx tslint --fix .\src\*.ts // tslintによる修正

```tslint.json
    "rules": {
        "semicolon": [
            true,
            "always"
          ]
    },
```

#### Promise resolve()の引数について
resolveはT型のvalueが必要なので、T型にvoidを明記すると引数が不要になる。
> new Promise<T>(executor: (resolve: (value: T | PromiseLike<T>) => void
```ts
new Promise<void>((resolve, _) => {
    setTimeout(() =>{
        console.log('test');
        resolve();
    },2000);
```
#### 値の確認


#### 