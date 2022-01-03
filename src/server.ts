import express, { Express } from "express";
import { routes } from "./routes";

export class ServerSetup {
  app: Express;

  constructor(private port = 3333) {
    this.app = express();
  }

  init():void {;
    this.middleware();
    this.routes();
  }

  start():void {
    this.app.listen(this.port, () => {
      console.log(`Server is running in port ${this.port}`);
    })
  }

  middleware():void {
    this.app.use(express.json());
  }

  routes():void {
    this.app.use(routes);
  }
}


