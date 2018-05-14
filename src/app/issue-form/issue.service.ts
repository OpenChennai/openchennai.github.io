import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Injectable()
export class IssueService {

  constructor(private http: HttpClient,
              private app: AppComponent) {
  }

  postIssue(repo, requestBody) {
    const url = this.app.BASE_URL + '/' + repo + '/issues';
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.app.PAT);
    const options = { headers: headers};

    return this.http.post(url, requestBody, options);
  }
}
