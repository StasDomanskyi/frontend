import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/httpService/http-service';

@Component({
  selector: 'app-put-additional-data',
  templateUrl: './put-additional-data.component.html',
  styleUrls: ['./put-additional-data.component.scss']
})
export class PutAdditionalDataComponent implements OnInit {
  public putForm = new FormGroup({
    key: new FormControl('addon_number'),
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

    this.request = `http://localhost:3000/r5/${this.putForm.value.key}/${this.putForm.value.valueOfKey}`;

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
