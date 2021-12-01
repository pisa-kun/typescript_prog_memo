// type Shoe = {
//     purpose: string
// }

interface Shoe {
    purpose: string
}

class BalletFlat implements Shoe{
    purpose = 'dancing'
}

class Boot implements Shoe{
    purpose = 'woodcutting'
}

class Sneaker implements Shoe{
    purpose = 'walking'
}

// shoeという変数がcreateという関数の要素を持つ
let shoe = {
    // typeに対して合併型を使って型安全にする
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe{
        switch(type){
            case 'balletFlat': return new BalletFlat();
            case 'boot': return new Boot();
            case 'sneaker': return new Sneaker();
        }
    }
}

// こっちはcreatetという関数をshoeにセットする
// let shoe = function create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
//         switch(type){
//             case 'balletFlat': return new BalletFlat();
//             case 'boot': return new Boot();
//             case 'sneaker': return new Sneaker();
//         }
//     }

console.log(shoe.create('boot').purpose);