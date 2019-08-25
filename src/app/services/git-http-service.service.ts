import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { User } from '../user';
import {} from '../repository';
import {SearcFormComponent} from '../searc-form/searc-form.component';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHttpServiceService {
  user:User[]=[];
  _URL = 'https://api.github.com/users/';
  token = '?access_token=' + environment.GITAPIKEY;

  constructor(private http:HttpClient) { 
  }

  searchUsers(searchTerm:string){
    interface data {
      login: string;
    }
    return new Promise((resolve,reject)=>{
      this.user=[];
      this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
        (results) => {
          this.user.push(results);
          resolve();
        },
        (error) => {
          reject();
        } 
      );

      });
  }
}
