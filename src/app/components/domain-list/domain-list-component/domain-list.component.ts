import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpService/http-service';

@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.scss']
})
export class DomainListComponent implements OnInit {
  public title: string = 'Список доменів';

  public items;

  private request: string;
  
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public getAll() {
    this.request = `http://localhost:3000/r8`;

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
