import { Component, OnInit } from '@angular/core';
import {GitHttpServiceService} from '../services/git-http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public gitHttpService:GitHttpServiceService) { }


  ngOnInit() {
  }

  searchUser(searchTerm){
    this.gitHttpService.searchUsers(searchTerm)
  }

}
