import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-data',
  templateUrl: './support-data.component.html',
  styleUrls: ['./support-data.component.scss']
})
export class SupportDataComponent implements OnInit {
  public title: string = 'Дані про запити в підтримку';
  
  constructor() { }

  ngOnInit() {
  }

}
