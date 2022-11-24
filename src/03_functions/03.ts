
import {student, StudentType} from "../02_objects/02";
import exp from "constants";
import {CityType, GovernmentType, HousesType} from "../02_objects/02_02";

export const addSkill = (student:StudentType,skill:string)=>{
student.technologies.push({
    id:new Date().getTime(),
    title:skill
})
}

export function switchActive(student:StudentType){
    student.isActive = true
}

export function studentLiveCity(s:StudentType,city:string){
    if(s.addres.city.nameTitle == city){
        return true
    } else {
        return false
    }
}

export function addMoneyToBudget(building: GovernmentType, budget: number){
    building.budget += budget
}

export function repairHouse(house: HousesType){
    house.repaired = true
}

export function toFireStaff(gv: GovernmentType, quality: number){
    gv.staffCount -= quality
}

export function toHireStaff(gv: GovernmentType, quality: number){
    gv.staffCount += quality
}

export const createMessage = (props: CityType) => {
    return `Hello, ${props.title}`
}