import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searc-form',
  templateUrl: './searc-form.component.html',
  styleUrls: ['./searc-form.component.css']
})

export class SearcFormComponent implements OnInit {

@Output() emitSearch = new EventEmitter<any>()

  searchTerm:string;
  constructor() { }

  search(){
    this.emitSearch.emit(this.searchTerm);
  }

  ngOnInit() {
  }

}
