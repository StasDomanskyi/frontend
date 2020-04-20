import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.scss']
})
export class AccountDataComponent implements OnInit {
  public title: string = 'Дані про рахунок';
  
  constructor() { }

  ngOnInit() {
  }

}
