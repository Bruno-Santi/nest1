import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'Honda', model: 'Civic' },
    { id: uuid(), brand: 'Ford', model: 'F100' },
  ];

  getAllCars() {
    return this.cars;
  }
  getLengthOfCars() {
    return this.cars.length;
  }
  getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    console.log(this.cars, id);
    if (!car) throw new NotFoundException(`Car with id: ${id} not found`);
    return car;
  }

  createNewCar(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(car);
    console.log(this.cars);
    return car;
  }
}
