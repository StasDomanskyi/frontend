import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpService/http-service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-employee-data',
  templateUrl: './post-employee-data.component.html',
  styleUrls: ['./post-employee-data.component.scss']
})
export class PostEmployeeDataComponent implements OnInit {
  public postForm = new FormGroup({
    employee_full_name: new FormControl(''),
    age: new FormControl(''),
    experience: new FormControl(''),
    position: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    employee_number: new FormControl(''),
  });

  public request: string = null;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r6`;
    this.postData(this.request, this.postForm.value);
  }

  async postData(endpoint, data) {
    console.log(data);

    let subscribtion = await this.httpService.post(endpoint, data).subscribe((res) => {
      console.log(res);
    });
  }
}
