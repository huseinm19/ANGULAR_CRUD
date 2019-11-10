import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Buss } from './buss';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const buses = [
      { id: 1, ime: 'Volvo', gradPolaska: 'Gornji-Vakuf', vrijemePolaska:'17:00', vrijemeDolaska:'20:00' },
      { id: 2, ime: 'Scania', gradPolaska: 'Gornji-Vakuf', vrijemePolaska:'17:00', vrijemeDolaska:'20:00' },
      { id: 3, ime: 'Man', gradPolaska: 'Gornji-Vakuf', vrijemePolaska:'17:00', vrijemeDolaska:'20:00' },
    ];
    return {buses};
  }

  // Overrides the genId method to ensure that a bus always has an id.
  // If the buses array is empty,
  // the method below returns the initial number (11).
  // if the buses array is not empty, the method below returns the highest
  // bus id + 1.
  genId(buses: Buss[]): number {
    return buses.length > 0 ? Math.max(...buses.map(bus => bus.id)) + 1 : 11;
  }
}

 
