import Express from "express";
import { TestController } from "../gateway/test/TestController";

export const testApp = Express();


testApp.get('/', TestController.getTest)

testApp.post('/', TestController.postTest)
