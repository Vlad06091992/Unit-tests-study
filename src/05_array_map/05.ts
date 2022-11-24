import {GovernmentType, HousesType} from "../02_objects/02_02";
import exp from "constants";

export type ManType = {
    name:string
    age:number
}

export const people:Array<ManType> = [
    {name:"Andrew Ivanov", age:33},
    {name:"Alexandr Petrov", age:24},
    {name:"Dmitriy Sidorov", age:18},
]

const transformator = (man:ManType)=>({

        stack:["css","js","react"],
        firstName:man.name.split(' ')[0],
        lastName:man.name.split(' ')[1],

})

const devs = people.map(transformator)

export const messages = (man:ManType) => {
    return `Hello ${man.name.split(" ")[0]}. welcome to it incubator`
}

export const getStreetsTitleOfGovernmentsBuildings = (arr:Array<GovernmentType>)=>{

    return arr.map(b=>b.address.street.title)
}

export const getStreetsTitleOfHouses = (arr:Array<HousesType>) => {
    return arr.map(s=>s.address.street.title)
}

export const createMessages = (arr:Array<HousesType>)=>{
    return arr.map(s=>`Hello guys from ${s.address.street.title}`)
}