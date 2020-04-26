import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpService/http-service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-account-data',
  templateUrl: './post-account-data.component.html',
  styleUrls: ['./post-account-data.component.scss']
})
export class PostAccountDataComponent implements OnInit {
  public postForm = new FormGroup({
    account_number: new FormControl(''),
    account_description: new FormControl(''),
    sum: new FormControl(''),
    account_status: new FormControl(''),
    client_number: new FormControl(''),
  });

  public request: string = null;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r2`;
    this.postData(this.request, this.postForm.value);
  }

  async postData(endpoint, data) {
    console.log(data);

    let subscribtion = await this.httpService.post(endpoint, data).subscribe((res) => {
      console.log(res);
    });
  }
}
