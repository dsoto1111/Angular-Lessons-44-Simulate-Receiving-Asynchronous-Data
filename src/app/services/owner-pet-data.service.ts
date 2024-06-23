import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Owner } from '../owner';
import { OWNERS } from '../owner-pet';

@Injectable({
  providedIn: 'root'
})
export class OwnerPetDataService {

  constructor() { }

  getOwners(): Observable<Owner[]> {
    return of(OWNERS);
  }
}
