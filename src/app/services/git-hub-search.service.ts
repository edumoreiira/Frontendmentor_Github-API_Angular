import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GitHubSearch } from '../models/search.model';

@Injectable({
  providedIn: 'root'
})
export class GitHubSearchService {

  constructor(private http: HttpClient) {
   }

   private url = "https://api.github.com/users/";
   getData(username: string){
    return this.http.get<GitHubSearch>(this.url + username)
   }
}
