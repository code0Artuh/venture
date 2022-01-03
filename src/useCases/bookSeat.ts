
interface ISeat {
  number: string;
  booked: boolean;
}

interface IAirplane {
  id: string;
  departureTime: number;
  arrivalTime: number;
  airport: string;
  availableSeats: number;
  ticketPrice: number;
}

export class BookSeat {
  
  public static getSeat(seat: ISeat, airplane: IAirplane): boolean {

    if (seat.booked || airplane.availableSeats === 0) return false;

    const timeNow = new Date(Date.now());
    const deparTureTimeDateFormated = new Date(airplane.departureTime);

    if ((deparTureTimeDateFormated.getHours() - timeNow.getHours()) <= 1) return false;

    return true;
  }
}