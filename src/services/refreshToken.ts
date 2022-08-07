import { sign } from "jsonwebtoken"

export const generateToken = (id: string, payload: object = {}) => {
    return sign({id}, process.env.TOKEN_KEY as string, {
        subject: id,
        expiresIn: "10m"
    })
}

export const generateRefreshToken = (id: string) => {
    return sign({ id }, process.env.REFRESH_KEY as string, {
        subject: id,
        expiresIn: "2d"
    })
}