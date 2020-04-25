import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosting-service-data',
  templateUrl: './hosting-service-data.component.html',
  styleUrls: ['./hosting-service-data.component.scss']
})
export class HostingServiceDataComponent implements OnInit {
  public title: string = 'Дані про послугу хостингу';

  constructor() { }

  ngOnInit() {
  }

}
