import { Router } from "express";
import { BookSeatController } from "./Controllers/bookSeat";

export const routes = Router();

routes.get("/", (req, res) => {
  res.send("Ok");
})

routes.post("/book", new BookSeatController().handle);