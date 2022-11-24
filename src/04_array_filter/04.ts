export const ages = [18,20,22,1,100,90,14]

export const predicate = (age:number) => {
    return age > 90
}

export const courses = [
    {title:"CSS", price:110},
    {title:"JS", price:200},
    {title:"React", price:150},
]

type CoursesType = {
    title:string
    price:number
}

export const predicateCourses = (course:CoursesType)=>{
    return course.price < 160
}