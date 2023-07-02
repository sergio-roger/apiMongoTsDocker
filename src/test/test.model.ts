import { Schema, Types, model, Model } from "mongoose";
import { Test } from "./test.interface";

/**
 * @description Schema TestModel of example for a model of mongo
*/
const testSchema = new Schema<Test>(
  {
    propertyString: {
      type: String,
      required: true
    },
    propertyNumber: {
      type: Number,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const TestModel = model("TestModel", testSchema, "tests");
export default TestModel;
