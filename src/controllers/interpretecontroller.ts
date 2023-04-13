import { Request, Response } from "express";
class InterpreteController {

    // metodo ping
    public pong(req: Request, res: Response) {
      res.send("Pong interpreter controller");
    }
}
export const interpreteController = new InterpreteController();