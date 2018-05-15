import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  positions: any[];

  constructor() {
  }

  ngOnInit() {
  }

  onMapReady(map) {
    console.log('map', map);
    console.log('markers', map.markers);  // to get all markers as an array
  }

  onIdle(event) {
    console.log('map', event.target);
  }

  onMarkerInit(marker) {
    console.log('marker', marker);
  }

  onMapClick(event) {
    this.positions.push(event.latLng);
    event.target.panTo(event.latLng);
  }

}
