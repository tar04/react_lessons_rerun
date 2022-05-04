// const show = (a: number, b: number): number => {
//     return a + b;
// }
//
// const user = {name: "Max", age: 15};
//
// const showUser = (user: { name: string, age: number }): void => {
//
// }
//
// const user2: { name: string, age: number|null} = {age: 1, name: 's'}
//
// console.log(user2);

type UniqueId=number;

interface IUser1<T> {
    id: UniqueId,
    name: string,
    age: number,
    arr:T[]
}

interface IAddress {
    house: number,
    street: string
}

const user: IUser1<number> = {name:'',age:15,id:1,arr:[1]};

const incAge=(someUser:{age:number},inc:number)=>{
    someUser.age+=inc;
}