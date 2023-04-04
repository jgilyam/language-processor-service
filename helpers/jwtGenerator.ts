//const jwt = require('jsonwebtoken');
import jwt, { JwtPayload } from "jsonwebtoken";

const privateKey = process.env.SECRET_PRIVATE_KEY || "";
const user = process.env.API_USER || "";

export const jwtGeneretor = () => {
  return jwt.sign({ user: user }, privateKey, { expiresIn: "10y" });
};

export const jwtDecoder = (token: string) => {
  return jwt.verify(token, privateKey);
};
