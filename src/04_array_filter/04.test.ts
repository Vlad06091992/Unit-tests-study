import {ages} from "./04";
import {courses} from "./04";
test("should take old men older than 90", ()=>{

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})

test("should take price < 160", ()=>{

    const cheapCourses = courses.filter(course=>course.price < 160
    )

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe("CSS")
    expect(cheapCourses[1].title).toBe("React")

})

test("only unCompleted tasks", ()=>{

    const tasks = [
        {id:1,title:"Bread", isDone: false},
        {id:2,title:"Milk", isDone: true},
        {id:3,title:"Salt", isDone: true},
        {id:4,title:"Sugar", isDone: false},
    ]

    const unCompletedTasks = tasks.filter(task=>!task.isDone)

    expect(unCompletedTasks.length).toBe(2)
    expect(unCompletedTasks[0].title).toBe("Bread")
    expect(unCompletedTasks[1].title).toBe("Sugar")

})

test("Houses should be destroyed",()=>{
    let a = 1

    expect(a).toBe(1)


})