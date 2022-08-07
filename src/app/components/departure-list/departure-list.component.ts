import { Component, OnInit } from '@angular/core';
import { DepartureService } from '../../shared/departure.service';

@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.scss']
})
export class DepartureListComponent implements OnInit {
   DeparturesList: any = [];
  
    ngOnInit() {
      this.loadDepartures();
    }
    constructor(
      public departureService: DepartureService
    ){ }
     // Issues list
     loadDepartures() {
      return this.departureService.GetDepartures().subscribe((data: {}) => {
        this.DeparturesList = data;
      })
    }
}

