import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/httpService/http-service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-get-account-data',
  templateUrl: './get-account-data.component.html',
  styleUrls: ['./get-account-data.component.scss']
})
export class GetAccountDataComponent implements OnInit {
  public getForm = new FormGroup({
    status: new FormControl(''),
    account: new FormControl(''),
  });

  public request: string = null;
  public items: any;
  public amount: number = 0;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r2/${this.getForm.value.status}/${this.getForm.value.account}`;
    console.log( this.getForm.value);

    this.getData(this.request, this.getForm.value);
    return this.items;
  }

  async getData(endpoint, data) {
    let subscribtion = await this.httpService.get(endpoint, data).subscribe((res) => {
      console.log(res);
      this.items = res;
      this.amount = this.items.length;
    });
  }
}
