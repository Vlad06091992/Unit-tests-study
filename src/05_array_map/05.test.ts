import {ManType} from "./05";
import {messages} from "./05";
let people: Array<ManType>

beforeEach(()=>{
    people = [
        {name:"Andrew Ivanov", age:33},
        {name:"Alexandr Petrov", age:24},
        {name:"Dmitriy Sidorov", age:18},
    ]
})

test("should get array greeeting mesgs", ()=>{
    let greeting = people.map(messages)

expect(greeting.length).toBe(3)
expect(greeting[0]).toBe('Hello Andrew. welcome to it incubator',)
expect(greeting[1]).toBe('Hello Alexandr. welcome to it incubator',)
expect(greeting[2]).toBe('Hello Dmitriy. welcome to it incubator',)
})

