import { Request, Response, Router } from "express";
import { UserController } from "../user/user.controller";

const router = Router();

/**
 * @path http://localhost:$port/user
*/

router.get("/", UserController.getUsers);

export { router };