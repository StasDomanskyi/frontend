import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpService/http-service';

@Component({
  selector: 'app-support-data',
  templateUrl: './support-data.component.html',
  styleUrls: ['./support-data.component.scss']
})
export class SupportDataComponent implements OnInit {
  public title: string = 'Дані про запити в підтримку';
  
  public items;

  public amount: number = 0;

  private request: string;
  
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public getAll() {
    this.request = `http://localhost:3000/r4`;

    this.getData(this.request);
    return this.items;
  }

  async getData(endpoint) {
    let subscribtion = await this.httpService.get(endpoint).subscribe((res) => {
      console.log(res);
      this.items = res;
      this.amount = this.items.length;
    });
  }
}
