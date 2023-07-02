import { Request, Response, Router } from "express";
import { TestController } from "../test/test.controller";
import { testMiddleware } from "../middleware/test.middleware";

const router = Router();

/**
 * @path http://localhost:$port/test
*/

router.get("/", TestController.get);
router.post('/', testMiddleware, TestController.post);

export { router };
