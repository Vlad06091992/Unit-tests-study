type ManType = {
    name: string,
    age: 30,
    lessons: Array<{ title: string,name?:string }>
    address: {
        street: {
            title: string
        }
    }
}


let props: ManType

beforeEach(() => {
    props = {
        name: "Vlad",
        age: 30,
        lessons: [{title: "1"}, {title: "2"},{title: "3",name:"lesson"}],
        address: {
            street: {
                title: "Voronova street"
            }
        }
    }
})


test("", () => {

    let[,ls2] = props.lessons
let[ls1,...restLessons] = props.lessons

    let {name, age, lessons} = props
    let {title} = props.address.street

    expect(name).toBe("Vlad")
    expect(age).toBe(30)
    expect(title).toBe("Voronova street")

    expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")

    expect(props.lessons[2]).toStrictEqual({name:"lesson",title: "3"})

    expect(restLessons.length).toBe(2)


})
