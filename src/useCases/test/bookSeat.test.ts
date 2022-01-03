import { BookSeat } from "../bookSeat";

describe("book seat", () => {
  const mockSeat = {
    id: "0",
    number: "4a",
    booked: false
  }

  const airplaneMock = {
    id: "1",
    departureTime: 1641053374,
    arrivalTime: 1641053374,
    airport: "Congonhas",
    availableSeats: 73,
    ticketPrice: 740
  }  
  beforeAll(() => {
    jest.spyOn(Date, "now").mockReturnValue(airplaneMock.departureTime - (2 * 1000 * 60 * 60));
  })
  
  it("Should book a seat", () => {
    const response = BookSeat.getSeat(mockSeat, airplaneMock);

    expect(response).toBeTruthy();
  })

  it("Should not book a seat with booked is marked with true", () => {
    const testMockSeat = {...mockSeat, booked: true};

    const response = BookSeat.getSeat(testMockSeat, airplaneMock);

    expect(response).toBeFalsy();
  })

  it("Should not book a seat with seats quantity equals 0", () => {

    const airplaneTestMock = {...airplaneMock, availableSeats: 0};

    const response = BookSeat.getSeat(mockSeat, airplaneTestMock);

    expect(response).toBeFalsy();
  })

  it("Should not book a seat when the time is less than an hour for departure", () => {

    jest.spyOn(Date, "now").mockReturnValue(airplaneMock.departureTime - (1 * 1000 * 60 * 60 ));
    const response = BookSeat.getSeat(mockSeat, airplaneMock);

    expect(response).toBeFalsy();
  })
})