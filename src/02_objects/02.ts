type LocalCityType = {
    nameTitle:string
    country:string
}
type AddresType = {
    city:LocalCityType,
    street:string
}
type TechnologiesType = {
    id:number,
    title:string
}
export type StudentType = {
    id:number,
    name:string,
    age:number,
    isActive:boolean,
    addres:AddresType
    technologies:Array<TechnologiesType>
}

export const student:StudentType = {
    id:1,
    name: "Vlad",
    age: 30,
    isActive:false,
    addres:{
        city:{
            nameTitle:"Tagil",
            country:"Russia"
        },
        street:"Frunze"
    },
    technologies:[
        {
            id:1,
            title:'HTML'
        },
        {
            id:2,
            title:'CSS'
        },
        {
            id:3,
            title:'React'
        },

    ]
}

console.log(student.addres.city.country)
console.log(student.technologies[0].title)