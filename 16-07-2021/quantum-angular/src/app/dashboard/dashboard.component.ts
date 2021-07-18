import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courseData:any[] | undefined;
  constructor() { }

  ngOnInit(): void {
    // console.log(document.querySelector('body'))
    (document.querySelector('body') as any).style.backgroundColor = '#eeeeee';
    fetch("../../assets/data.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.courseData = Array.from(data)
      console.log(this.courseData)
    })
  }

}
