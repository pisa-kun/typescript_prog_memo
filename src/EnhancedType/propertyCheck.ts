type Options = {
    baseURL: string,
    cacheSize?: number,
    tier?: 'prod' | 'dev'
}

class API {
    constructor(private options: Options){
        
    }
}

new API({
    baseURL: 'http://api.mysite.com',
    tier:'dev'
}as Options);

let bOptions = {
    baseURL: 'http://hoge.com',
    badTier: 'prod'
};

console.log(typeof(bOptions));
let api = new API(bOptions);

// 明示的に型指定するとプロパティチェックする
// let badOptions: Options = {
//     baseURL: 'http://hoge.com',
//     badTier: 'prod'
// };

type Unit = 'cm' | 'px' | '%'

type Width = {
    unit: Unit,
    value: number
}

