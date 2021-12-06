type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

// function getNextDay(w: Weekday): Day{
//     switch(w){
//         case 'Mon': return 'Tue';
//     }
// }

function getNextDay(w: Weekday): Day | undefined{
    switch(w){
        case 'Mon': return 'Tue';
    }
}

// nが100以下の場合は？
function isBig(n: number){
    if(n >= 100){
        return true;
    }
}