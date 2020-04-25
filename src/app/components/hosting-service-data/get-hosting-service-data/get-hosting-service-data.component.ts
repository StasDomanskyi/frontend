import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/httpService/http-service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-get-hosting-service-data',
  templateUrl: './get-hosting-service-data.component.html',
  styleUrls: ['./get-hosting-service-data.component.scss']
})
export class GetHostingServiceDataComponent implements OnInit {
  public getForm = new FormGroup({
    key: new FormControl(''),
    valueOfKey: new FormControl(''),
    domain: new FormControl(''),
  });

  public request: string = null;
  public items: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r3/${
      this.getForm.value.key
      }/${
      this.getForm.value.valueOfKey
      }/${
      this.getForm.value.domain
    }`;
    console.log(this.getForm.value);
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