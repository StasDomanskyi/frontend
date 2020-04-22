import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-get-clients-list',
  templateUrl: './get-clients-list.component.html',
  styleUrls: ['./get-clients-list.component.scss']
})
export class GetClientsListComponent implements OnInit {
  public getForm = new FormGroup({
    key: new FormControl(''),
    valueOfKey: new FormControl(''),
  });

  public request: string = null;

  constructor() { }

  ngOnInit() {
  }

  public sendRequest() {
    
    this.request = `http://localhost:3000/r1/${this.getForm.value.key}/${this.getForm.value.valueOfKey}`;
    console.log(this.request);
  }
}
