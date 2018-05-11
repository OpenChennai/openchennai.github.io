import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';

interface Reporter {
  name: string;
  link: string;
  count: number;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  providers: [LeaderboardService]
})
export class LeaderboardComponent implements OnInit {

  data: any;
  reporters: Reporter[] = [];

  constructor(private service: LeaderboardService) {
  }

  ngOnInit() {
    this.service.getIssues().subscribe((data) => {
      this.data = data;
      this.processData();
    });
  }

  processData() {
    this.data.forEach((content, _) => {
      const body = content['body'];

      const lines = body.split('\r\n', 2);

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
        if (this.reporters != null) {
          for (let i = 0; i < this.reporters.length; i++) {
            if (this.reporters[i].name === name && this.reporters[i].link === link) {
              this.reporters[i].count++;
              userExists = true;
              break;
            }
          }
        }

        if (!userExists) {
          const reporter: Reporter = { name: name, link: link, count: 1 };
          this.reporters.push(reporter);
        }
      }
    });
  }

}
