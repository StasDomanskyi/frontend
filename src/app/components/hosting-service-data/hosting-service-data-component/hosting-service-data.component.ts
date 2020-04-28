import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpService/http-service';

@Component({
  selector: 'app-hosting-service-data',
  templateUrl: './hosting-service-data.component.html',
  styleUrls: ['./hosting-service-data.component.scss']
})
export class HostingServiceDataComponent implements OnInit {
  public title: string = 'Дані про послугу хостингу';

  public items;

  private request: string;
  
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public getAll() {
    this.request = `http://localhost:3000/r3`;

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
