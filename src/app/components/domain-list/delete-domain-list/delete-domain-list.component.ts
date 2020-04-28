import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/httpService/http-service';

@Component({
  selector: 'app-delete-domain-list',
  templateUrl: './delete-domain-list.component.html',
  styleUrls: ['./delete-domain-list.component.scss']
})
export class DeleteDomainListComponent implements OnInit {
  public deleteForm = new FormGroup({
    key: new FormControl(''),
    valueOfKey: new FormControl(''),
  });

  public request: string = null;
  public items: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r8/${this.deleteForm.value.key}/${this.deleteForm.value.valueOfKey}`;

    this.deleteData(this.request);
    return this.items;
  }

  async deleteData(endpoint) {
    let subscribtion = await this.httpService.delete(endpoint).subscribe((res) => {
      console.log(res);
      this.items = res;
    });
  }
}
