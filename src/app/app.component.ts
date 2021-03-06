import { Component } from '@angular/core';
import { MapIssue } from './map-issue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  BASE_URL = 'https://api.github.com/repos/OpenChennai';

  // TODO: Remove Community and GitHub page project from this list
  repositories = [
    // 'Community',
    'Roads',
    'Water-and-Sanitation',
    'Electricity',
    'Garbage',
    'Public-Transport',
    'Traffic',
    'Parks-and-Playgrounds',
    'Trees'
    // 'openchennai.github.io'
  ];

  PAT = '';
  issues: MapIssue[];
}
