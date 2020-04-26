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
    addon_name: new FormControl(''),
    addon_number: new FormControl(''),
    client_number: new FormControl(''),
    main_domain: new FormControl(''),
    addon_status: new FormControl(''),
    order_date: new FormControl(''),
    end_date: new FormControl(''),
  });

  public request: string = null;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r5`;
    this.postData(this.request, this.postForm.value);
  }

  async postData(endpoint, data) {
    console.log(data);

    let subscribtion = await this.httpService.post(endpoint, data).subscribe((res) => {
      console.log(res);
    });
  }
}
