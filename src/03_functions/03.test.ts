import {addSkill} from "./03";
import {StudentType} from "../02_objects/02";
import {switchActive} from "./03";
import {studentLiveCity} from "./03";

let student:StudentType

beforeEach(()=>{
    student = {
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
})

test('new tech skill should be added',()=>{
    expect(student.technologies.length).toBe(3)
    addSkill(student,"Vue.js")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("Vue.js")
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active',()=>{
    expect(student.isActive).toBe(false)
    switchActive(student)
    expect(student.isActive).toBe(true)

})

test('does student live in city?',()=>{
   let res1 = studentLiveCity(student,"Tagil")
   let res2 = studentLiveCity(student,"Minsk")
expect(res1).toBe(true)
expect(res2).toBe(false)

})