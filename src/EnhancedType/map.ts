import { KeyPairSyncResult } from "crypto"

type Account = {
    id: number,
    isEmployee: boolean,
    notes: string[]
}

// 全てのフィールドを省略可能にする
type OptionalAccount = {
    [k in keyof Account]?: Account[k]
}

// すべてのフィールドをnull許容にする
type NullableAccount = {
    [k in keyof Account]: Account[k] | null
}

// コンパニオンオブジェクトパターン
// 型と値の情報をグループ化
type Unit = 'EUR' | 'GBP' | 'JPY' | 'USD';

type Currency = {
    unit: Unit,
    value: number
}

// 変数
let Currency = {
    from(value: number, unit: Unit): Currency{
        return {
            unit:unit,
            value
        }
    }
}

// typeとして扱う
let amountDue: Currency = {
    unit: 'JPY',
    value: 83733.10
}

let other = Currency.from(330, 'EUR');