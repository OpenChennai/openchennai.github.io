import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MapIssue } from '../map-issue';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  showMarker: boolean = false;

  issue: MapIssue = new MapIssue("", "", null);

  constructor(public app: AppComponent) {
  }

  ngOnInit() {
  }

  clicked({target: marker}) {
    const lat = Number((marker.getPosition().lat()).toFixed(6));
    const lng = Number((marker.getPosition().lng()).toFixed(6));

    for (let i = 0; i < this.app.issues.length; i++) {
      if (this.app.issues[i].location === lat + ', ' + lng) {
        this.issue = this.app.issues[i];
        this.showMarker = true;
        marker.nguiMapComponent.openInfoWindow('iw', marker);
        break;
      }
    }
  }

}
