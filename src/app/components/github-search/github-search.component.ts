import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitHubSearchService } from '../../services/git-hub-search.service';
import { GitHubSearch } from '../../models/search.model';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-github-search',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  providers:[GitHubSearchService],
  templateUrl: './github-search.component.html',
  styleUrl: './github-search.component.scss'
})
export class GithubSearchComponent{
  
  constructor(private githubService: GitHubSearchService){
  }
  //search response
  searchResponse = '';

  user: GitHubSearch = {
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: '',
    company: '',
    blog: '',
    location: '',
    email: '',
    hireable: '',
    bio: '',
    twitter_username: '',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '',
    updated_at: ''
  }

  getUser(){
    this.githubService.getData(this.searchResponse).subscribe(
      data => {
        console.log(data)
        this.user = data;
      }
    )
  }

  





















  // constructor(private http: HttpClient){

  // }

  // data = {}

  // ngOnInit(): void {
  // }

  // public fetch(){
  //   this.http.get('https://api.github.com/users/edumoreiira').subscribe(
  //     (resp: any) => {
  //       this.data = resp;

  //       console.log(this.data)
  //     }
  //   )
  // }
}
