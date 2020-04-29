import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/httpService/http-service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-get-support-data',
  templateUrl: './get-support-data.component.html',
  styleUrls: ['./get-support-data.component.scss']
})
export class GetSupportDataComponent implements OnInit {
  public getForm = new FormGroup({
    key: new FormControl(''),
    valueOfKey: new FormControl(''),
    status: new FormControl(''),
  });

  public request: string = null;
  public items: any;
  public amount: number = 0;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r4/${
      this.getForm.value.key
      }/${
      this.getForm.value.valueOfKey
      }/${
      this.getForm.value.status
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