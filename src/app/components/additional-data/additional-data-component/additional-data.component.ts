import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpService/http-service';

@Component({
  selector: 'app-additional-data',
  templateUrl: './additional-data.component.html',
  styleUrls: ['./additional-data.component.scss']
})
export class AdditionalDataComponent implements OnInit {
  public title: string = 'Дані про додаткові послуги';

  public items;

  private request: string;
  
  
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public getAll() {
    this.request = `http://localhost:3000/r5`;

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
