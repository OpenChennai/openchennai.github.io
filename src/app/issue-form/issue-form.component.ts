import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {

  submitted = false;

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

}
