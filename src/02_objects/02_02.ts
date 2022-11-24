export type StreetType = {
    title:string
}

export type AddressType = {
    number?:number
    street:StreetType
}

export type HousesType = {
    id?:number
    buildedAt:number,
    repaired:boolean,
    address: AddressType
}

export type GovernmentType = {
    type:"hospital" | "FIRE-STATION"
    budget:number,
    staffCount:number
    address: AddressType
}



export type CityType = {
    citizensNumber:number,
    title:string
    houses:Array<HousesType>
    governmentBuildings:Array<GovernmentType>,
}