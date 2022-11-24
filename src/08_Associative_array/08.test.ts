
type UsersType = {
    [key:string]:{id:number,name:string}
}

let UsersObj:UsersType = {
    '12353': { id: 1, name: 'Ilya' },
        '14343': { id: 1, name: 'Ilya' },
        '15454': { id: 0, name: 'Vlad' },
        '15645': { id: 1, name: 'Ilya' },
        '1412412': { id: 1, name: 'Ilya' },
        '24903850943': { id: 24903850943, name: 'VtyaAK47' }
      }
beforeEach(()=>{
    UsersObj = {
        '12353': { id: 1, name: 'Ilya' },
            '14343': { id: 1, name: 'Ilya' },
            '15454': { id: 0, name: 'Vlad' },
            '15645': { id: 1, name: 'Ilya' },
            '1412412': { id: 1, name: 'Ilya' },
            '24903850943': { id: 24903850943, name: 'VtyaAK47' }
          }
      }
)
test("Should be correct user",()=>{

UsersObj['123'] = {id:123,name:"Ekaterina"}

    expect(UsersObj['15454'].name).toBe("Vlad")
    expect(UsersObj['123'].name).toBe("Ekaterina")

})


test("Should be delete user",()=>{

delete UsersObj['15645']

    expect(UsersObj['15645']).toBe(undefined)


})