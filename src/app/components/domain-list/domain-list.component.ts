import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.scss']
})
export class DomainListComponent implements OnInit {
  public title: string = 'Список доменів';

  constructor() { }

  ngOnInit() {
  }

}
