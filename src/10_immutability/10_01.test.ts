import { moveUser, UserWithLaptop,UserType,LaptopType } from "./10_01";
import { HairDresser } from "./10_01";






test("reference type test", () => {
    let user: UserWithLaptop = {
        name: "Vlad",
        hair: 20,
        address: {
            title: "Tagil"
        },
        laptop: {
            title: "Acer"
        }
    }

    const awesome = HairDresser(user, 2)
    const movedUser = moveUser(user, "Salda")
    user.laptop.title = "Asus"

    expect(user.hair).not.toBe(awesome.hair)
    expect(awesome.address.title).not.toBe(movedUser.address.title)
    expect(awesome.address).toBe(user.address)
    expect(movedUser.laptop).toBe(user.laptop)
    expect(movedUser.laptop.title).toBe("Asus")
})