import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeaderboardService {

  BASE_URL = 'https://api.github.com/repos/OpenChennai';

  repositories = [
    'Community',
    'Roads',
    'Water-and-Santitation',
    'Electricity',
    'Garbage',
    'Public-Transport',
    'Traffic',
    'Parks-and-Playgrounds',
    'Trees',
    'openchennai.github.io'
  ];

  constructor(private http: HttpClient) {
  }

  getIssues() {
    const repo = 'Community';
    // this.repositories.forEach((repo, _) => {
      const url = this.BASE_URL + '/' + repo + '/issues';

      return this.http.get(url);
    // });
  }
}
