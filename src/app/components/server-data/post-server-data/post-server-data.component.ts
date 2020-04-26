import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpService/http-service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-server-data',
  templateUrl: './post-server-data.component.html',
  styleUrls: ['./post-server-data.component.scss']
})
export class PostServerDataComponent implements OnInit {
  public postForm = new FormGroup({
    server_name: new FormControl(''),
    RAM: new FormControl(''),
    CPU: new FormControl(''),
    drive_size: new FormControl(''),
    handler: new FormControl(''),
    db_version: new FormControl(''),
    services: new FormControl(''),
  });

  public request: string = null;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r7`;
    this.postData(this.request, this.postForm.value);
  }

  async postData(endpoint, data) {
    console.log(data);

    let subscribtion = await this.httpService.post(endpoint, data).subscribe((res) => {
      console.log(res);
    });
  }
}
