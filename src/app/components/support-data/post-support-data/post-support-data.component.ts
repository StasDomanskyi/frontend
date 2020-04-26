import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpService/http-service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-support-data',
  templateUrl: './post-support-data.component.html',
  styleUrls: ['./post-support-data.component.scss']
})
export class PostSupportDataComponent implements OnInit {
  public postForm = new FormGroup({
    prefix: new FormControl(''),
    ticket_number: new FormControl(''),
    executive_worker: new FormControl(''),
    ticket_status: new FormControl(''),
    client_number: new FormControl(''),
  });

  public request: string = null;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r4`;
    this.postData(this.request, this.postForm.value);
  }

  async postData(endpoint, data) {
    console.log(data);

    let subscribtion = await this.httpService.post(endpoint, data).subscribe((res) => {
      console.log(res);
    });
  }
}
