import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpService/http-service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-clients-list',
  templateUrl: './post-clients-list.component.html',
  styleUrls: ['./post-clients-list.component.scss']
})
export class PostClientsListComponent implements OnInit {
  public postForm = new FormGroup({
    user_number: new FormControl(''),
    user_name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    user_status: new FormControl(''),
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
