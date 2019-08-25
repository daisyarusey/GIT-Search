import { Component, OnInit } from '@angular/core';
import {RepoHttpServiceService} from '../services/repo-http-service.service';
import {Repository} from '../repository';
import { from } from 'rxjs';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repo:Repository[];


  constructor(public repoHttpService:RepoHttpServiceService) { }
  getRepo(searchTerm){
    this.repoHttpService.getRepo(searchTerm).then((success)=>{
      this.repo=this.repoHttpService.repo;
      console.log(this.repo);
    },
    (error)=>{
      console.log(error)
    }
    
    )
  }

  ngOnInit() {
    this.getRepo("daisyarusey");
  }

}
