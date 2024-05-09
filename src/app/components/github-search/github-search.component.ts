import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitHubSearchService } from '../../services/git-hub-search.service';
import { GitHubSearch } from '../../models/search.model';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-github-search',
  standalone: true,
  imports: [HttpClientModule, FormsModule, AsyncPipe],
  providers:[GitHubSearchService],
  templateUrl: './github-search.component.html',
  styleUrl: './github-search.component.scss'
})
export class GithubSearchComponent{
  
  constructor(private githubService: GitHubSearchService){
  }
  //search response
  searchResponse = '';
  
  user = new Observable<GitHubSearch>();

  getUser(username: string){
    this.user = this.githubService.getData(username)
  }

  // processedData(){
  //   console.log(this.user)
  // }
}
