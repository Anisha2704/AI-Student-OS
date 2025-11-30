export const validateEmail = (email) =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    console.log(regex.test("anishamalore@gmail.com"))
    return regex.test(email)
}

export const validatePassword = (password) =>{
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#?])[A-Za-z\d@$!%*?&#?]{8,}$/
    return regex.test(password)
}