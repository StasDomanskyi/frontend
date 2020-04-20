import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {
  public title: string = 'Дані про працівника компанії';

  constructor() { }

  ngOnInit() {
  }

}
