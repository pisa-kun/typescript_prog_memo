function formatInput(input: string | number): any;

function formatInput(input: string | number): string | number{
    // switch (input){
    //     case typeof === 'string':
    // }
    if(typeof(input) === 'string'){
        return input;
    }
    if(typeof(input) === 'number'){
        return input;
    }
    return "fail";
}

formatInput("a" as string);