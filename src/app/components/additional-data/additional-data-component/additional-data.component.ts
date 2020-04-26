import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-data',
  templateUrl: './additional-data.component.html',
  styleUrls: ['./additional-data.component.scss']
})
export class AdditionalDataComponent implements OnInit {
  public title: string = 'Дані про додаткові послуги';

  constructor() { }

  ngOnInit() {
  }

}
