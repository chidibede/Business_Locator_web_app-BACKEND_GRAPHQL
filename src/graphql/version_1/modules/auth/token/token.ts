import jwt from "jsonwebtoken";

const secret: string | undefined = process.env.TOKEN_SECRET || "";

export const issueTokens = async (userData: {id: number, username: string, email:string}) => {
    let token = await jwt.sign(userData,secret,{ expiresIn: 120 });
    let refreshToken = await jwt.sign(userData,secret,{ expiresIn: "3d" });
    return {token, refreshToken}
}