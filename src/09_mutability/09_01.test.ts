import {user} from "./09_01";
import {IncreaseAge} from "./09_01";
import {inflate} from "zlib";

test("object and new object", () => {

    expect(user.age).toBe(30)
    let NewUser = IncreaseAge(user)
    expect(user.age).toBe(30)
    expect(NewUser.age).toBe(31)
    expect(NewUser.work).toBeTruthy()
})

test("primitive type", () => {
    let count = 100
    let newCount = count
    count++

    expect(count).toBe(101)
    expect(newCount).toBe(100)
})

test("reference type test", () => {

    interface UserType {
        name: string,
        age: number,
        address: AddressType
    }

    interface AddressType {
        city: string
    }

    let user: UserType = {
        name: "Vlad",
        age: 30,
        address: {
            city: "Salda"
        }
    }

    let girl = {
        name: "Marina",
        age: 24,
        address: user.address
    }

    let copyUser = {...user, car: "bmw"}
    copyUser.address.city = "ekb"

    user.address.city = "Tagil"

    expect(girl.address.city).toBe("Tagil")
    expect(girl.address.city).toBe("Tagil")


    // expect(copyUser.address.city).toBe("Salda")
    // expect(user).toEqual(copyUser)

})

test("Array copy test", () => {


    let arr1 = [{
        name: "Vlad",
        age: 30,
        address: {
            city: "Salda"
        }
    }, {
        name: "Marina",
        age: 24,
        address: {
            city: "Tagil"
        }
    }]



    let copyLink = arr1

    let copy = arr1.reduce((acc:any,el)=>{
        let obj = {...el}
        acc.push(obj)
        return acc
    },[])

    arr1[0].age = 32
    copy[0].age = 35

    expect(arr1[0].age).toBe(32)

    expect(copyLink[0].age).toBe(32)
    // expect(copy[0].age).toBe(35)
    expect(copyLink[0].age).toBe(32)

})