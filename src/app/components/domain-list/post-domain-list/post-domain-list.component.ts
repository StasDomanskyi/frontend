import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpService/http-service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-domain-list',
  templateUrl: './post-domain-list.component.html',
  styleUrls: ['./post-domain-list.component.scss']
})
export class PostDomainListComponent implements OnInit {
  public postForm = new FormGroup({
    domain_name: new FormControl(''),
    NS: new FormControl(''),
    client_number: new FormControl(''),
    domain_status: new FormControl(''),
    invoice: new FormControl(''),
    register: new FormControl(''),
    register_date: new FormControl(''),
    end_date: new FormControl(''),
  });

  public request: string = null;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r8`;
    this.postData(this.request, this.postForm.value);
  }

  async postData(endpoint, data) {
    console.log(data);

    let subscribtion = await this.httpService.post(endpoint, data).subscribe((res) => {
      console.log(res);
    });
  }
}
