export type UserType = {
    name:string
    hair:number
    address:{
        title:string
    }
   
}

export type LaptopType = {
    title:string
}

export type UserWithLaptop = UserType & {
    laptop:LaptopType
}

export function HairDresser(u: UserWithLaptop, power: number) {
    let copy = {
        ...u,
        hair: u.hair / power
    }

    return copy
}

export function moveUser(u:UserWithLaptop,title:string){
    let copy = {
        ...u,
        address:{...u.address,title}
    }
    return copy
}