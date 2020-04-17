import { Component, OnInit } from '@angular/core';
import { IForms } from '../interfaces/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: string = 'меню';

  public forms: IForms[] = [
    {
      name: 'Cписок клієнтів',
      link: '',
    },
    {
      name: 'Дані про рахунок',
      link: '',
    },
    {
      name: 'Дані про послугу хостингу',
      link: '',
    },
    {
      name: 'Дані про запити в підтримку',
      link: '',
    },
    {
      name: 'Дані про додаткові послуги',
      link: '',
    },
    {
      name: 'Дані про працівника компанії',
      link: '',
    },
    {
      name: 'Дані про сервер',
      link: '',
    },
    {
      name: 'Список доменів',
      link: '',
    },
  ];

  ngOnInit() {
  }

}
