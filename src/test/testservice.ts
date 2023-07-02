import { Test } from "./test.interface";
import TestModel from "./test.model";

/**
 * @class TestService
 * @description Service example for interactive whit bd mongo
*/
export class MyTestService {

  constructor() {
  }

  /**
   * @description Method example for find a all register in the bd
   * @return Promise
  */
  async findAll() {
    try {
      const find = await TestModel.find({});
      return find;
    } catch (error) {
      return error;
    }
  }

  /**
   * @param object Test
   * @description Method example for create a one register in the bd
   * @return Promise
  */
  async create(object: Test) {
    const newTest = await TestModel.create(object);
    return newTest;
  }
}
