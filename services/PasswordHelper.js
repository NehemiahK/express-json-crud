import bcrypt from 'bcrypt'

export async function hashPassword(password){
    return bcrypt.hash(password, 10)
}

export async function checkPasswordsMatch(password, hashedPassword){
    return bcrypt.compare(password, hashedPassword)
}