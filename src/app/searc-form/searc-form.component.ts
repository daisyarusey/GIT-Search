import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searc-form',
  templateUrl: './searc-form.component.html',
  styleUrls: ['./searc-form.component.css']
})
export class SearcFormComponent implements OnInit {

  searchTerm:string;
  constructor() { }

  ngOnInit() {
  }

}
