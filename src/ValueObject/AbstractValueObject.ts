// https://blog.mamansoft.net/2020/02/19/express-value-object-by-typescript/
// npm install shallow-equal-object
import {shallowEqual} from 'shallow-equal-object';

export abstract class AbstractValueObject<T>{
    protected readonly _value: T;

    protected constructor(_value: T){
        // 値を変更不能(immutable)にする
        this._value = Object.freeze(_value);
    }

    equals(vo?: AbstractValueObject<T>): boolean{
        if(vo == null){
            return false;
        }
        // プロパティ同士が完全等価の場合のみtrueを返す
        return shallowEqual(this._value, vo._value);
    }
}


