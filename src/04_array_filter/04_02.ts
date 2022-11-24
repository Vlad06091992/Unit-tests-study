import {CityType, GovernmentType} from "../02_objects/02_02";

export function demolishHousesOnTheStreet(city:CityType,street:string){
    if (street === "Happystreet"){
        city.houses = city.houses.filter(h => h.address.street.title != "Happy street")
    }

}

export function getBuildingsWithStaffCountGreaterThen(arr:Array<GovernmentType>,value:number){
    return arr.filter(build => build.staffCount > 500)
}