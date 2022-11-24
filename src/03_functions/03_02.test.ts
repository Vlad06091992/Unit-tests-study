import {CityType} from "../02_objects/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toHireStaff} from "./03";
import {toFireStaff} from "./03";



let city: CityType

beforeEach(()=>{
    city = {
        citizensNumber:1000000,
        title: "New York",
        houses: [
            {
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

test("Budget should be changed for Hospital",()=>{
    addMoneyToBudget(city.governmentBuildings[0],100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test("Budget should be changed for fire-staion",()=>{
    addMoneyToBudget(city.governmentBuildings[1],-100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test("House should be repaired",()=>{
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})

test("staff should be increased",()=>{
    toFireStaff(city.governmentBuildings[0],20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test("staff should be increased",()=>{
    toHireStaff(city.governmentBuildings[0],20)
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})

test("Greating message should be correct",()=>{
   const res = createMessage(city)
    expect(res).toBe("Hello, New York")
})