export interface IUser{
    id:number,
    username:string,
    email:string,
    name:string,
    address:{
        street:string,
        suite:string,
        city:string,
        zipcode:string,
        geo:{
            lat:number,
            lng:number
        }
    }
}