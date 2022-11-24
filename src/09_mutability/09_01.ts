export let user = {
    name:"Vlad",
    age:30
}

interface UserType {
    name:string
    age:number
}

export function IncreaseAge (obj:UserType){
    let newUser = {...obj, work : "vsmpo"}
    newUser.age++
    return newUser

}


