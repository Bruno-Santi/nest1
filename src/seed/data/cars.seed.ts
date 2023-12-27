import { Car } from 'src/cars/interfaces';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Volkswagen',
    model: 'Up',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherokee',
  },
];
