// typescriptはクラスの名前ではなく、
// その構造によって比較する
class Zebra{
    trot(){console.log('i am zebra');}
}

class Poodle{
    trot(){console.log('i am poodle');}
}

function ambleAround(animal: Zebra){
    console.log('call amble Around');
    animal.trot();
}

let zebra = new Zebra();
let poodle = new Poodle();

// .trotを実装しているかが大切
ambleAround(zebra);
ambleAround(poodle);