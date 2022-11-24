export const User = () => {
    const deleteUser = () => {
        alert("User have been deleted!!")
    }

    const saveUser = () => {
        alert("User have been saved!!")
    }

    const onNameChanged = (e: any) =>{
        console.log("Name changed")
    console.log(e)
}

    return(
        <div>
            <textarea onChange={onNameChanged}></textarea>
            <div onClick={deleteUser}>Delete User</div>
            <div onClick={saveUser}>Save User</div>
        </div>
    )

}