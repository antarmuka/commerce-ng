import { RentalModel } from './../shared/rental.model';
import { RentalService } from './../shared/rental.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentalList: RentalModel[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    const rentalObservable = this.rentalService.getRentals();
    rentalObservable.subscribe(
      (rentals: RentalModel[]) => {
        this.rentalList = rentals;
      },
      (err) => {

      },
      () => {

      }
    );
  }

}
