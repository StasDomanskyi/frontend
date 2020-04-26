import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server-data.component.html',
  styleUrls: ['./server-data.component.scss']
})
export class ServerDataComponent implements OnInit {
  public title: string = 'Дані про сервер';

  constructor() { }

  ngOnInit() {
  }

}
