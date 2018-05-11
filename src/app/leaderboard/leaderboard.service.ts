import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeaderboardService {

  BASE_URL = 'https://api.github.com/repos/OpenChennai';

  // TODO: Remove Community and GitHub page project from this list
  repositories = [
    'Community',
    'Roads',
    'Water-and-Sanitation',
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

  getIssues(repo) {
    const url = this.BASE_URL + '/' + repo + '/issues';
    return this.http.get(url);
  }
}
