import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Issue } from '../issue';
import { IssueService } from './issue.service';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css'],
  providers: [IssueService]
})
export class IssueFormComponent implements OnInit {

  submitted = false;
  responseUrl = '';

  issue: Issue = {
    name: '',
    link: '',
    section: '',
    description: ''
  };

  constructor(public app: AppComponent,
              private service: IssueService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const title = this.issue.description.substring(0, 50);
    const body = this.issue.name + '\r\n' + this.issue.link + '\r\n' + this.issue.description;
    const requestBody = {
      'title': title,
      'body': body
    };

    this.service.postIssue(this.issue.section, requestBody).subscribe((data) => {
      if (data != null) {
        this.responseUrl = data['url'];
        this.submitted = true;
      }
    });

  }

  onSubmitAnother() {
    this.submitted = false;
    this.issue = {
      name: '',
      link: '',
      section: '',
      description: ''
    };
  }

}
