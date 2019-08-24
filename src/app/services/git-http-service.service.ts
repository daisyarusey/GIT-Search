import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitHttpServiceService {

  constructor(private http:HttpClient) { }

  searchUsers(searchTerm:string){
    console.log(searchTerm);
    let searchEndpoint = "https://api.github.com/users/daisyarusey?api_key=" + environment.GITAPIKEY;
    searchEndpoint += "&q="+searchTerm;
    let promise =  new Promise((resolve, reject)=>{
      this.http.get(searchEndpoint).toPromise().then(
        (results)=>{
          console.log(results);
          resolve()
        },
        (error)=>{
          console.log(error)
          reject()
        }
      )
  })
  return promise;
}
}
