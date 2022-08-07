import { Component, OnInit } from '@angular/core';
import { DepartureService } from '../../shared/departure.service';
import {animate, state, style, transition, trigger, query, stagger, keyframes} from '@angular/animations';

//import {MatTable} from '@angular/material';
//import {MatTableModule} from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-testdep-list',
  templateUrl: './testdep-list.component.html',
  styleUrls: ['./testdep-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]), 
    trigger("listAnimation", [
      transition("* => *", [
        // each time the binding value changes
        query(
          ":leave",
          [stagger(100, [animate("0.5s", style({ opacity: 0 }))])],
          { optional: true }
        ),
        query(
          ":enter",
          [
            style({ opacity: 0 }),
            stagger(100, [animate("0.5s", style({ opacity: 1 }))])
          ],
          { optional: true }
        )
      ])
    ]),
    trigger("enterAnimation", [
      transition(":enter", [
        style({ transform: "translateX(100%)", opacity: 0 }),
        animate(
          "500ms",
          style({
            transform: "translateX(0)",
            opacity: 1,
            "overflow-x": "hidden"
          })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateX(0)", opacity: 1 }),
        animate("500ms", style({ transform: "translateX(100%)", opacity: 0 }))
      ])
    ]),
    trigger("slideIn", [
      state("*", style({ "overflow-y": "hidden" })),
      state("void", style({ "overflow-y": "hidden" })),
      transition("* => void", [
        style({ height: "*" }),
        animate(250, style({ height: 0 }))
      ]),
      transition("void => *", [
        style({ height: "0" }),
        animate(250, style({ height: "*" }))
      ])
    ]),
  ]  
})
export class TestdepListComponent implements OnInit {
  TestdepList: any = [];
  displayedColumns = ['time', 'delay', 'todirection', 'traintype', 'platform', 'day'];
  expandedElement: DeparturedatasetElement | null;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(  
    public departureService: DepartureService
  ) { }

  ngOnInit(): void {
    this.loadDepartures();
  }
  // test depature list
  loadDepartures() {
      return this.departureService.GetDepartures().subscribe((data: {}) => {
        this.TestdepList = data;
      })
  }
  removeDepartures() {
    this.TestdepList.splice(0, 1);
    console.log('TestDeparture removed!');
    this.table.renderRows();   // muss unbedingt aufgerufen werden
  }
}

export interface DeparturedatasetElement {
  id: string;
  time: string;
  delay: string;
  todirection: string;
  traintype: string;  // RE, ICE ...
  platform: string;  // 11, 13, 14b
  day: string;
  arppth: string;
  dpppth: string;
}
