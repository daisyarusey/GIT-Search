import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable} from 'rxjs';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class RepoHttpServiceService {
  repo:Repository[]=[];
  _URL = 'https://api.github.com/users/';
  token = '?access_token=' + environment.GITAPIKEY;

  constructor(public  http: HttpClient) { }

  getRepo(searchTerm: string){
    interface data {
      login: string;
    }
    return new Promise((resolve,reject)=>{
      this.repo=[];
      this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
        (results) => {
          this.repo.push(results);
          resolve();
        },
        (error) => {
          reject();
        } 
      );

      });
  }
}

