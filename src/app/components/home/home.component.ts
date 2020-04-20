import { Component, OnInit } from '@angular/core';
import { IForms } from '../../interfaces/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: string = 'головне меню';

  public forms: IForms[] = [
    {
      name: 'Cписок клієнтів',
      link: '/client-list',
    },
    {
      name: 'Дані про рахунок',
      link: '/account-data',
    },
    {
      name: 'Дані про послугу хостингу',
      link: '/hosting-service-data',
    },
    {
      name: 'Дані про запити в підтримку',
      link: '/support-data',
    },
    {
      name: 'Дані про додаткові послуги',
      link: '/additional-data',
    },
    {
      name: 'Дані про працівника компанії',
      link: '/employee-data',
    },
    {
      name: 'Дані про сервер',
      link: '/server-data',
    },
    {
      name: 'Список доменів',
      link: '/domain-list',
    },
  ];

  ngOnInit() {
  }

}
