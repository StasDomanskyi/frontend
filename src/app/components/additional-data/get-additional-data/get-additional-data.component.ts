import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/httpService/http-service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-get-additional-data',
  templateUrl: './get-additional-data.component.html',
  styleUrls: ['./get-additional-data.component.scss']
})
export class GetAdditionalDataComponent implements OnInit {
  public getForm = new FormGroup({
    status: new FormControl(''),
    key: new FormControl(''),
    valueOfKey: new FormControl(''),
  });

  public request: string = null;
  public items: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r5/${
      this.getForm.value.key
      }/${
      this.getForm.value.valueOfKey
      }/${
      this.getForm.value.status
    }`;
    console.log( this.getForm.value);

    this.getData(this.request, this.getForm.value);
    return this.items;
  }

  async getData(endpoint, data) {
    let subscribtion = await this.httpService.get(endpoint, data).subscribe((res) => {
      console.log(res);
      this.items = res;
    });
  }
}
