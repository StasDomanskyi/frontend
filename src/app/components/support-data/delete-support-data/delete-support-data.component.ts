import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/httpService/http-service';

@Component({
  selector: 'app-delete-support-data',
  templateUrl: './delete-support-data.component.html',
  styleUrls: ['./delete-support-data.component.scss']
})
export class DeleteSupportDataComponent implements OnInit {
  public deleteForm = new FormGroup({
    prefix: new FormControl(''),
    ticket_number: new FormControl(''),
  });

  public request: string = null;
  public items: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public sendRequest() {
    this.request = `http://localhost:3000/r4/${this.deleteForm.value.prefix}/${this.deleteForm.value.ticket_number}`;

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
