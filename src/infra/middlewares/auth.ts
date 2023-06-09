import { Request, Response, NextFunction } from "express";
import { jwtDecoder } from "../../../helpers/jwtGenerator";
import dotenv from "dotenv";
import { JwtPayload } from "jsonwebtoken";

dotenv.config();

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error();
    }

    const decoded = jwtDecoder(token);
    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    res.status(401).send({
      error: "Please authenticate",
    });
  }
};
