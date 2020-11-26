import { Action, ActionWithBody } from "..";
import { ExpectedBodyType } from "./types"

const getTest = Action((_req, res) => {
  res.send({ "app": 'test' })
});

const postTest = ActionWithBody(ExpectedBodyType)((req, res) => {
  res.send(req.body)
});

export const TestController = {
  getTest,
  postTest
}
