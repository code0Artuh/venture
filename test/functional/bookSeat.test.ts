import { ServerSetup } from '../../src/server';
import supertest, { SuperTest } from 'supertest';

describe("Book a seat", () => {

  let test: SuperTest<supertest.Test>;
  let server: ServerSetup;
  beforeAll( () => {
    server = new ServerSetup();
    server.init();
    test = supertest(server.app);
  });
  
  it("Should book a seat", async () => {
    jest.spyOn(Date, "now").mockImplementation(() => 1641133225074);

    const mockResponse = {
      airplane: {
        id: "12",
        departureTime: Date.now() + (100 * 60 * 60 *1000),
        arrivalTime: Date.now(),
        airport: "Congonhas",
        availableSeats: 2,
        ticketPrice: 400
      }
    } 
    
    const response = await test.post("/book").send({
       number: "4a"
     });

     expect(response.status).toBe(201);
     expect(response.body).toEqual(mockResponse);
  })
})

