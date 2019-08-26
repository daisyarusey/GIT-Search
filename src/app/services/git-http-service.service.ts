import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';
import {SearcFormComponent} from '../searc-form/searc-form.component';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHttpServiceService {
  user:User;
  repo:Repository;

  constructor(public http:HttpClient) { 
    this.user = new User('','','','','',0,0,new Date,0);
    this.repo = new Repository('', '', '');
  }

  searchUsers(searchTerm:string){
    console.log(searchTerm)
    interface ApiResponse {
    avatar_url:string;
  login:string;
  company: string;
  location: string;
    name: string;
  followers: number;
  following: number;
  created_at: Date;
  public_repos: number;
    }
    let searchPoint = 'https://api.github.com/users/' + searchTerm + '?access_token=' + environment.GITAPIKEY;
    console.log(searchPoint);

    let promise = new Promise((resolve, reject) => {

      this.http.get<ApiResponse>(searchPoint).toPromise().then(
        (results) => {

          console.log(results);
          this.user = results;
          console.log(this.user);

          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;
  }

  getRepos(searchTerm) {

    interface ApiResponse {
     name: string;
     description: string;
     html_url: string;
    }

    let searchPoint = 'https://api.github.com/users/' + searchTerm + '/repos?access_token=' + environment.GITAPIKEY;

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(searchPoint).toPromise().then(
        (repoResults) => {
          console.log(repoResults);
          this.repo = repoResults;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;
  }

}