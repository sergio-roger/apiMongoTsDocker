import { Request, Response } from "express";
import { MyTestService } from "./testservice";

/**
 * @class TestController
 * @description Controller example
*/
export class TestController {

  /**
   * @param req Request
   * @param res Response
   * @description Method example for route type get
   * @return void
  */
 public static async get(req: Request, res: Response) {
    const service: MyTestService = new MyTestService();

    try {
      const testObject = await service.findAll();

      res.status(200).json({
        msj: 'Hello world',
        data: testObject
      });
    } catch (error) {
      res.status(500).json({ error });
      console.log(error);
    }
	}

  /**
   * @param req Request
   * @param res Response
   * @description Method example for route type post
   * @return void
  */
  public static post(req: Request, res: Response): void {
    res.status(200).json({
      msj: 'Method post'
    });
  }
}
