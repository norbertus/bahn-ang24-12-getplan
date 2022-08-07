import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetableconst-list',
  templateUrl: './timetableconst-list.component.html',
  styleUrls: ['./timetableconst-list.component.scss']
})
export class TimetableconstListComponent implements OnInit {
  displayedColumns = ['planedtime', 'delayedtime', 'todirection', 'traintype', 'platform', 'planedday'];
  dataSourceDeparture = DEPARTURE_ELEMENT_DATA;
  dataSourceArrival = ARRIVAL_ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface DepartureElement {
  planedtime: string;
  delayedtime: string;
  todirection: string;
  traintype: string;
  platform: string;
  planedday: string;
};


const DEPARTURE_ELEMENT_DATA: DepartureElement[] = [
  {planedtime: '16:32', delayedtime: '1', todirection: 'Berlin Ostbahnhof', traintype: 'ICE', platform: '11', planedday: '14.07.2022'},
  {planedtime: '16:34', delayedtime: '0', todirection: 'Frankfurt (Oder)', traintype: 'RE', platform: '12', planedday: '14.07.2022'},
  {planedtime: '16:37', delayedtime: '0', todirection: 'Dessau Hbf', traintype: 'RE', platform: '13', planedday: '14.07.2022'},
  {planedtime: '16:40', delayedtime: '2', todirection: 'Flughafen BER - Terminal 1-2', traintype: 'RB', platform: '11', planedday: '14.07.2022'},
  {planedtime: '16:41', delayedtime: '0', todirection: 'Hannover Hbf', traintype: 'ICE', platform: '14', planedday: '14.07.2022'},
  {planedtime: '16:47', delayedtime: '0', todirection: 'Wismar', traintype: 'RE', platform: '13', planedday: '14.07.2022'},
  {planedtime: '16:53', delayedtime: '1', todirection: 'Berlin Ostbahnhof', traintype: 'ICE', platform: '11', planedday: '14.07.2022'},
  {planedtime: '16:58', delayedtime: '0', todirection: 'Berlin Ostkreuz', traintype: 'RE', platform: '11', planedday: '14.07.2022'},
  {planedtime: '17:00', delayedtime: '0', todirection: 'Nauen', traintype: 'RB', platform: '14', planedday: '14.07.2022'},
];

export interface ArrivalElement {
  planedtime: string;
  delayedtime: string;
  fromdirection: string;
  traintype: string;
  platform: string;
  planedday: string;
};


const ARRIVAL_ELEMENT_DATA: ArrivalElement[] = [
  {planedtime: '16:30', delayedtime: '1', fromdirection: 'Brandenburg Hbf', traintype: 'ICE', platform: '11', planedday: '14.07.2022'},
  {planedtime: '16:32', delayedtime: '0', fromdirection: 'Bad Belzig', traintype: 'RE', platform: '12', planedday: '14.07.2022'},
  {planedtime: '16:35', delayedtime: '0', fromdirection: 'Cottbus', traintype: 'RE', platform: '13', planedday: '14.07.2022'},
];
