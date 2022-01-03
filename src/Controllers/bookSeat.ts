import { Request, Response } from "express";
import { DatabaseAdapter } from "../Infra/databaseAdapter";
import { BookSeat } from "../useCases/bookSeat";


export class BookSeatController {
  async handle(req: Request, res: Response) {
    const { seatNumber } = req.body;

    try {
      const seat = await new DatabaseAdapter().findOne(seatNumber);

      if (!seat) return res.status(401).json("Seat does not exists")

      if(!BookSeat.getSeat({number: seat.number, booked: seat.booked}, {})) {
        return res.status(401).json("Cant book seat");
      }
      

      return res.status(201).json({
        seatNumber: seatNumber,
        airplane: seat.airplanes
      });
    }catch(err){
      return res.status(401).json({ Error: err});
    }
  }
}