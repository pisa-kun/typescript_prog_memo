type APIResponse = {
    user: {
        userId: string,
        friendList :{
            count: number,
            friends:{
                firstName: string,
                lastName: string
            }[]
        }
    }
}

type FriendList = APIResponse['user']['friendList']
function renderFriendList(friendList: FriendList){
    for (let i in friendList.friends){
        console.log(friendList.friends[i]);
    }
}

let arr: number[] = [1,2,3];
let list: {firstName:string, lastName: string}[] = [
    {firstName:"yuina", lastName:"miduki"},
    {firstName:"kiriko", lastName:"yukoku"},
]

let res: APIResponse = {
    user:{
        userId:'111',
        friendList:{
            count:100,
            friends:list
        }
    }
}

renderFriendList(res['user']['friendList']);

// keyof
type UserKeys = keyof APIResponse['user']; // friendList | userId
