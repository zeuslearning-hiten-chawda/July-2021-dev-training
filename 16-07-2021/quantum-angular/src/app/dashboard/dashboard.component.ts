import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courseData:any[] | undefined;
  document:any;
  isLoading:boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.isLoading = true;
    // console.log(document.querySelector('body'))
    (document.querySelector('body') as any).style.backgroundColor = '#eeeeee';
    fetch("../../assets/data.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.courseData = Array.from(data)
      console.log(this.courseData)
      this.isLoading = false
    })
  }


  contentView(){
    this.document = document;
    if((this.document.getElementById("sub").src).includes("dropdown-arrow.jpg")){
      this.document.getElementById("sub").src = '../../assets/raw/up-arrow.jpg';
      this.document.getElementById("sub-main").style.display = 'block';

    }else{
      this.document.getElementById("sub").src = '../../assets/raw/dropdown-arrow.jpg';
      this.document.getElementById("sub-main").style.display = 'none';
    }
  }
}
