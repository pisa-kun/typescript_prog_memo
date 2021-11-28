// AbstractObject.ts
// https://riotz.works/articles/lopburny/2019/08/28/using-typescript-re-export-and-import-syntax-to-improve-module-arrangement/
import {AbstractValueObject} from './AbstractValueObject';
import { PrimitiveValueObject } from './PrimitiveValueObject';
interface ValueObjectProps{
    [index: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> extends AbstractValueObject<T>{}

interface UserProps{
    id: number;
    firstName: string;
    lastName: string;
}

class User extends ValueObject<UserProps>{
    static create(props: UserProps): User{
        return new User(props);
    }

    get name(): string{
        return this._value.lastName + ' ' + this._value.firstName;
    }
}

// why props
// ts constructorは名前付き引数に未対応
const asashi = User.create({id: 1, lastName: 'serizawa', firstName: 'asashi'});
const asashi2 = User.create({id: 1, lastName: 'serizawa', firstName: 'asashi'});

console.log(asashi.name);
console.log(asashi == asashi2); // false
console.log(asashi === asashi2); // false
console.log(asashi.equals(asashi2)); // true

const asashi_id2 = User.create({id: 2, lastName: 'serizawa', firstName: 'asashi'});
const asashi_ULN = User.create({id: 1, lastName: 'Serizawa', firstName: 'asashi'});

console.log(asashi.equals(asashi_id2));
console.log(asashi.equals(asashi_ULN));

class UserId extends PrimitiveValueObject<number>{
    static create(value: number): UserId{
        if(!(value > 0)){
            throw new Error('id は 1以上を指定しよう');
        }
        return new UserId(value);
    }
}

class UserName extends PrimitiveValueObject<string>{
    static create(value: string): UserName{
        if(!(value.length > 0)){
            throw new Error('id は 1以上を指定しよう');
        }
        return new UserName(value);
    }
}

interface UserPropsP{
    id: UserId;
    name: UserName;
}

interface UserArgs{
    id: number;
    name: string;
}

// class UserP extends ValueObject<UserPropsP>{
//     static create(props: UserPropsP): UserP{
//         return new UserP(props);
//     }

//     get name(): string{
//         return this._value.name.value;
//     }
// }

class UserP extends ValueObject<UserPropsP>{
    static create(props: UserArgs): UserP{
        return new UserP({
            id: UserId.create(props.id),
            name: UserName.create(props.name),
        });
    }

    get name(): string{
        return this._value.name.value;
    }
}

const asashiP = UserP.create({id:2, name: "serizawa asashi"});
console.log(asashiP);
console.log(asashiP.name);