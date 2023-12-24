import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars: { id: number; brand: string; model: string }[] = [
    { id: 1, brand: 'Toyota', model: 'Corolla' },
    { id: 2, brand: 'Honda', model: 'Civic' },
    { id: 3, brand: 'Ford', model: 'F100' },
  ];

  getAllCars() {
    return this.cars;
  }
  getLengthOfCars() {
    return this.cars.length;
  }
  getCarById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id: ${id} not found`);
    return car;
  }
}
