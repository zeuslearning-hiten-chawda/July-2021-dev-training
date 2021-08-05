import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walk-in-details-page',
  templateUrl: './walk-in-details-page.component.html',
  styleUrls: ['./walk-in-details-page.component.css']
})
export class WalkInDetailsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const accordionItemHeaders = document.querySelectorAll('.accordion-item-header')

    accordionItemHeaders.forEach(item => {
      item.addEventListener('click', event => {
        item.classList.toggle('active');
      })
    });
  }

}
