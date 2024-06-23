import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from '../owner';
import { OWNERS } from '../owner-pet';
import { OwnerPetDataService } from '../services/owner-pet-data.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent implements OnInit {
    owners$!: Observable<Owner[]>;

    constructor( private OwnerPetSvc: OwnerPetDataService ) { }

    ngOnInit(): void {
        this.owners$ = this.OwnerPetSvc.getOwners();
    }
}
