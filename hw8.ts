// 1) создать интерфейс на основе этого объекта:

interface IMission{
    mission_name:string,
    launch_date_local:string,
    launch_site:ILaunch_site,
    links:ILinks,
    rocket:IRocket
}

interface ILaunch_site{
    site_name_long:string,
}

interface ILinks{
    article_link:null | string,
    video_link:null | string,
}

interface IRocket{
    rocket_name:string,
    first_stage:IFirst_stage,
    second_stage:ISecondStage
}

interface IFirst_stage{
    cores:ICores[]
}

interface ICores{
    flight:number,
    core:ICore
}

interface ICore{
    reuse_count:number,
    status:string
}

interface ISecondStage{
    payloads:IPayload[]
}

interface IPayload{
    payload_type:string,
    payload_mass_kg:number,
    payload_mass_lbs:number
}

const mission:IMission = {
    mission_name: "Starlink-15 (v1.0)",
    launch_date_local: "2020-10-24T11:31:00-04:00",
    launch_site: {
        site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    links: {
        article_link: null,
        video_link: "https://youtu.be/J442-ti-Dhg"
    },
    rocket: {
        rocket_name: "Falcon 9",
        first_stage: {
            cores: [
                {
                    flight: 7,
                    core: {
                        reuse_count: 6,
                        status: "unknown"
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: "Satellite",
                    payload_mass_kg: 15400,
                    payload_mass_lbs: 33951.2
                }
            ]
        }
    }
}

console.log(mission)

// ---------------------------------------------------------------------------—————————
// 2) протипизировать функции:

interface IUser {
    name: string,
    age: number,
    gender: string
}


const user1: IUser = {
    name: "Max",
    age: 18,
    gender: 'male'
}

function sum(a: number, b: number): number {
    return a + b
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}


function incAge1(someUser: IUser, inc: number): IUser {
    someUser.age += inc;
    return someUser;
}

// console.log(sum(1, 2));
// showSum(2, 3)
// const user2 = incAge(user, 2);
// console.log(user2)

type Name='Kira'|true

function d() {
    console.log(name1);
}
const name1:Name=true

d();
