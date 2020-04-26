import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/httpService/http-service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-get-employee-data',
  templateUrl: './get-employee-data.component.html',
  styleUrls: ['./get-employee-data.component.scss']
})
export class GetEmployeeDataComponent implements OnInit {
  public getForm = new FormGroup({
    status: new FormControl(''),
    experience: new FormControl(''),
  });

  public request: string = null;
  public items: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r6/${
      this.getForm.value.status
      }/${
      this.getForm.value.experience
      }`;
    console.log(this.getForm.value);

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
