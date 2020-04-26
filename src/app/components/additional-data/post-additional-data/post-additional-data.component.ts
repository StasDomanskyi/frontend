import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpService/http-service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-additional-data',
  templateUrl: './post-additional-data.component.html',
  styleUrls: ['./post-additional-data.component.scss']
})
export class PostAdditionalDataComponent implements OnInit {
  public postForm = new FormGroup({
    user_number: new FormControl(''),
    user_name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    status: new FormControl(''),
    balance: new FormControl(''),
  });

  public request: string = null;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r1`;
    this.postData(this.request, this.postForm.value);
  }

  async postData(endpoint, data) {
    console.log(data);

    let subscribtion = await this.httpService.post(endpoint, data).subscribe((res) => {
      console.log(res);
    });
  }
}
