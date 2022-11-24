import {CityType} from "../02_objects/02_02";
import {demolishHousesOnTheStreet} from "./04_02";
import {HousesType} from "../02_objects/02_02";
import {AddressType} from "../02_objects/02_02";
import {getBuildingsWithStaffCountGreaterThen} from "./04_02";


let city:CityType

beforeEach(()=>{
    city = {
        citizensNumber:1000000,
        title: "New York",
        houses: [
            {
                id:1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                id:2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                id:3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }
        ],
        governmentBuildings:[
            {
                type:"hospital",
                budget:200000,
                staffCount:200,
                address:{
                    street: {
                        title:"Central Str"
                    }
                }
            }, {
                type:"FIRE-STATION",
                budget:500000,
                staffCount:1000,
                address:{
                    street:{
                        title:"South Str"
                    }
                }
            }
        ],

    }
})

test("Houses should be destroyed",()=>{
    demolishHousesOnTheStreet(city,"Happystreet")

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test("buildings with correct staff count",()=>{
let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings,500)

    expect(buildings.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})



