import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/httpService/http-service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-get-domain-list',
  templateUrl: './get-domain-list.component.html',
  styleUrls: ['./get-domain-list.component.scss']
})
export class GetDomainListComponent implements OnInit {
  public getForm = new FormGroup({
    register: new FormControl(''),
  });

  public request: string = null;
  public items: any;
  public amount: number = 0;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r8/${
      this.getForm.value.register
      }`;
    console.log(this.getForm.value);

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
