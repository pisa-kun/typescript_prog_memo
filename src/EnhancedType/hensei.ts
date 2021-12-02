class Animal{}
class Bird extends Animal{
    public chirp(){}
}
class Crow extends Bird{
    public caw(){}
}

function chirp(bird: Bird): Bird{
    bird.chirp();
    return bird;
}

chirp(new Crow());
chirp(new Bird());
//chirp(new Animal());

function clone(f: (b:Bird) => Bird): void{

}

function birdToBird(b: Bird): Bird{
    return b;
}
clone(birdToBird); //ok

function birdToCrow(b: Bird): Crow{
    b.chirp();
    return new Crow();
}
clone(birdToCrow); //ok

function birdToAnimal(b: Bird): Animal{
    b.chirp();
    return new Animal();
}
//clone(birdToAnimal); //NG

function animalToBird(a: Animal): Bird{
    return new Bird();
}
clone(animalToBird);

function crowToBird(c: Crow): Bird{
    // 引数が関数を実行する想定
    // cloneのbirdはcrowにはなれない・・・
    c.caw();
    return new Bird();
}
//clone(crowToBird); //NG