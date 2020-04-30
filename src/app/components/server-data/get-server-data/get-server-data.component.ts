import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/httpService/http-service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-get-server-data',
  templateUrl: './get-server-data.component.html',
  styleUrls: ['./get-server-data.component.scss']
})
export class GetServerDataComponent implements OnInit {
  public getForm = new FormGroup({
    service: new FormControl(''),
    version: new FormControl(''),
  });

  public request: string = null;
  public items: any;
  public amount: number = 0;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r7/${
      this.getForm.value.service
      }/${
      this.getForm.value.version
      }`;
    console.log(this.getForm.value);
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