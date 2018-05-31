import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Injectable()
export class LeaderboardService {

  constructor(private http: HttpClient,
              private app: AppComponent) {
  }

  getIssues(repo) {
    const url = this.app.BASE_URL + '/' + repo + '/issues?state=all';
    return this.http.get(url);
  }
}
