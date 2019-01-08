import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dateString: String;

  constructor() {
  }

  ngOnInit() {
  }

  getDate() {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth();
    let monthString = month.toString(10);
    month = month + 1;
    if (month < 10) {
      monthString = '0' + monthString;
    }
    const day = date.getDate();
    let dayString = day.toString(10);
    if (day < 10) {
      dayString = '0' + dayString;
    }
    this.dateString = year + monthString + dayString;
  }

}
