import { NextFunction, Request, Response } from "express";

const testMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const header = req.headers;
  const userAgent = header["user-agent"];
  console.log("user-agent", userAgent);
  next();
};

export { testMiddleware };
