import { Router } from "express";
import { readdirSync } from "fs";
import { Utils } from "../utils/util";

const router = Router();
const path = Utils.getDirname(__dirname);
const vesionApi: string = '/api/v1';

readdirSync(path).filter((fileName) => {
  const cleanName = Utils.cleanFileName(fileName);

  import(`../routes/${cleanName}.router`).then((moduleRouter) => {
    router.use(`${vesionApi}/${cleanName}`, moduleRouter.router);
  });
});


export { router };