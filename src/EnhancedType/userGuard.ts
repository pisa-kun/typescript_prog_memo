// function isString(a: unknown): boolean{
//     return typeof a === 'string';
// }

// isStringがbooleanを返すだけでなく、
// trueの場合は引数がstringであることを、型チェッカーに伝える
function isString(a: unknown): a is string{
    return typeof a === 'string';
}

function parseInput(input: string | number){
    let formattedInput: string;
    if(isString(input)){
        formattedInput = input.toUpperCase();
    }
}