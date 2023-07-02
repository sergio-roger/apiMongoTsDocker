import { Request, Response } from "express";

export class UserController {

	static async getUsers(req: Request, res: Response) {
		res.send("Hola desde controller user");
	}
}