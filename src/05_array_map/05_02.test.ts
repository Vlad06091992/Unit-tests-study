import {CityType} from "../02_objects/02_02";
import {GovernmentType} from "../02_objects/02_02";
import {getStreetsTitleOfGovernmentsBuildings} from "./05";
import {getStreetsTitleOfHouses} from "./05";
import {createMessage} from "../03_functions/03";
import {createMessages} from "./05";

let city: CityType

beforeEach(() => {
    city = {
        citizensNumber: 1000000,
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
        governmentBuildings: [
            {
                type: "hospital",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            }, {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ]

    }
})

test("list of streets titles of governments buildings", () => {

    let streets = getStreetsTitleOfGovernmentsBuildings(city.governmentBuildings)

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe("Central Str")
    expect(streets[1]).toBe("South Str")
})

test("List streets titles", () => {

    let streets = getStreetsTitleOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("White street")
    expect(streets[1]).toBe("Happy street")
    expect(streets[2]).toBe("Happy street")
})

test("create greeting messages for streets", ()=>{
    let messages = createMessages(city.houses)


    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from White street')
    expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from Happy street')

})