import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {

  submitted = false;

  issue: Issue = {
    name: '',
    link: '',
    section: '',
    description: ''
  };

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log('submitted');
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
