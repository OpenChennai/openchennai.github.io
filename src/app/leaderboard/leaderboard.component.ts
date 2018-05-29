import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { AppComponent } from '../app.component';
import { MapIssue } from '../map-issue';

interface Reporter {
  name: string;
  link: string;
  count: number;
  rank: number;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  providers: [LeaderboardService]
})
export class LeaderboardComponent implements OnInit {

  data: any;
  unsortedReps: Reporter[] = [];
  reporters: Reporter[] = [];
  responsesReceived = 0;
  issues: MapIssue[] = [];

  constructor(private service: LeaderboardService,
              private app: AppComponent) {
  }

  ngOnInit() {
    this.unsortedReps = [];

    for (let i = 0; i < this.app.repositories.length; i++) {
      this.service.getIssues(this.app.repositories[i]).subscribe((data) => {
        this.data = data;
        this.processData();
        this.responsesReceived++;
        this.checkAndPrepareTable();
      });
    }
  }

  processData() {
    this.data.forEach((content, _) => {
      const body = content['body'];
      const issueTitle = content['title'];
      const issueUrl = content['html_url'];

      if (body !== null) {
        const lines = body.split('\r\n');

        this.setLeaderboardDetails(lines);

        this.setLocations(lines, issueTitle, issueUrl);
      }
    });
  }

  setLeaderboardDetails(lines) {
    let name = '';
    let link = '';

    if (lines[0].startsWith('Reporter: ')) {
      const reporterArr = lines[0].split('Reporter: ');
      name = reporterArr[1];
    }

    if (lines[1].startsWith('Link: ')) {
      const linkArr = lines[1].split('Link: ');
      link = linkArr[1];
    }

    if (name !== '' && link !== '') {
      let userExists = false;
      if (this.unsortedReps != null) {
        for (let i = 0; i < this.unsortedReps.length; i++) {
          if (this.unsortedReps[i].name === name && this.unsortedReps[i].link === link) {
            this.unsortedReps[i].count++;
            userExists = true;
            break;
          }
        }
      }

      if (!userExists) {
        const reporter: Reporter = { name: name, link: link, count: 1, rank: 0 };
        this.unsortedReps.push(reporter);
      }
    }
  }

  setLocations(lines, title, url) {
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('Location: ')) {
        const extractedArray = lines[i].split('Location: ');
        const latLong = extractedArray[1];
        const issue: MapIssue = new MapIssue(title, url, latLong);
        this.issues.push(issue);
      }
    }
    this.app.issues = this.issues;
  }

  checkAndPrepareTable() {
    if (this.responsesReceived === this.app.repositories.length) {
      this.sortResults();
    }
  }

  sortResults() {
    const sortedReps: Reporter[] = this.unsortedReps.sort((r1, r2) => (r1.count > r2.count) ? 0 : 1);

    let rank = 1;
    for (let i = 0; i < sortedReps.length; i++) {
      if (i > 0 && sortedReps[i].count < sortedReps[i - 1].count) {
        rank++;
      }
      sortedReps[i].rank = rank;
    }

    this.reporters = sortedReps;
  }

}
