import { Component, OnInit } from '@angular/core';
import {GitHttpServiceService} from '../services/git-http-service.service';
import {User} from '../user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User[];
  particlesJS:any;

  constructor(public gitHttpService:GitHttpServiceService) { }


  
  searchUser(searchTerm){
    this.gitHttpService.searchUsers(searchTerm).then(
      (success)=>{
        this.user=this.gitHttpService.user;
        console.log(this.user);
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.searchUser("daisyarusey");
    let particlessJS;
    particlessJS.load('particles-js','particles.json',null);
  }


}
