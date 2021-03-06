import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/httpService/http-service';

@Component({
  selector: 'app-put-employee-data',
  templateUrl: './put-employee-data.component.html',
  styleUrls: ['./put-employee-data.component.scss']
})
export class PutEmployeeDataComponent implements OnInit {
  public putForm = new FormGroup({
    key: new FormControl(''),
    valueOfKey: new FormControl(''),
    field: new FormControl(''),
    valueOfField: new FormControl('')
  });

  public request: string = null;
  public items: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    console.log(this.putForm.value);

    this.request = `http://localhost:3000/r6/${this.putForm.value.key}/${this.putForm.value.valueOfKey}`;

    this.putData(this.request, this.putForm.value);
    return this.items;
  }

  async putData(endpoint, data) {
    let subscribtion = await this.httpService.put(endpoint, data).subscribe((res) => {
      console.log(res);
      this.items = res;
    });
  }
}
