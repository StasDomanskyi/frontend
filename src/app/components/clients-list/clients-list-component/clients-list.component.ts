import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpService/http-service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  public title: string = 'Список клієнтів';
  
  public items;

  private request: string;
  
  
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public getAll() {
    this.request = `http://localhost:3000/r1`;

    this.getData(this.request);
    return this.items;
  }

  async getData(endpoint) {
    let subscribtion = await this.httpService.get(endpoint).subscribe((res) => {
      console.log(res);
      this.items = res;
    });
  }
}
