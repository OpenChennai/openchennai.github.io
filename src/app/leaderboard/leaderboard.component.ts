import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';

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
    const unsortedReps: Reporter[] = [];
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
        if (unsortedReps != null) {
          for (let i = 0; i < this.reporters.length; i++) {
            if (unsortedReps[i].name === name && unsortedReps[i].link === link) {
              unsortedReps[i].count++;
              userExists = true;
              break;
            }
          }
        }

        if (!userExists) {
          const reporter: Reporter = { name: name, link: link, count: 1, rank: 0 };
          unsortedReps.push(reporter);
        }
      }
    });

    const sortedReps: Reporter[] = unsortedReps.sort((r1, r2) => r1.count > r2.count);

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
