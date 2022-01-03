import { PrismaClient } from "@prisma/client";

interface ISeatsOnAirplane {
  seatsId: number;
  airplaneId: number;
  assignedAt: Date;
  assignedBy: string;
}

interface IAirplane {
  id: number;
  departureTime: number;
  arrivalTime: number;
  airport: string;
  availableSeats: number;
  ticketPrice: number;
  seats: ISeatsOnAirplane[];
}

interface ISeat {
  id: number;
  number: string;
  airplanes: ISeatsOnAirplane[]
}

export class DatabaseAdapter {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();

  }

  async findOne(number: string): Promise<ISeat & {airplanes: ISeatsOnAirplane[]} | null>  {
    return this.prisma.seats.findFirst({ 
      where: { number},
      include: {
        airplanes: true
      }
     })
    
  }

  async updateAirPlaneAvailableSeats(airplaneId: string) {
    
  }

  async updateBookSeat(airplaneId: string) {
    
  }
}