import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitHttpServiceService {

  constructor() { }

  searchUsers(searchTerm:string){
    console.log(searchTerm);
  }
}
