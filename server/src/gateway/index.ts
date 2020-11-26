import * as t from "io-ts";
import { PathReporter } from 'io-ts/PathReporter'
import { Request, Response } from 'express';

interface CustomRequest<T> extends Request {
  body: T
}

type ControllerFunction<BodyType = any> = (
  (req: CustomRequest<BodyType>, res: Response) => void
);


export function Action(then: ControllerFunction) {
  return (req: Request, res: Response) => then(req, res);
} 


export function ActionWithBody<P extends t.Props>(codec: t.TypeC<P>) {
  type BodyType = t.TypeOf<typeof codec>;
  return (then: ControllerFunction<BodyType>) => (req: CustomRequest<BodyType>, res: Response) => {
    const check = codec.decode(req.body)
    if (check._tag === 'Left') {
      const error = {
        message: 'Corpo da requisição inválido.',
        details: PathReporter.report(check),
      }
      res.status(400).send(error);
    } else {
      then(req, res);
    }
  }
}