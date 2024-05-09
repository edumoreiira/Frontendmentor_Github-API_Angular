import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GitHubSearchService } from '../../services/git-hub-search.service';
import { GitHubSearch } from '../../models/search.model';
import { Observable, share, shareReplay, startWith, take } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-github-search',
  standalone: true,
  imports: [HttpClientModule, FormsModule, AsyncPipe, CommonModule],
  providers:[GitHubSearchService],
  templateUrl: './github-search.component.html',
  styleUrl: './github-search.component.scss'
})
export class GithubSearchComponent implements OnInit{

  
  constructor(private githubService: GitHubSearchService){
  }
  //search response
  searchResponse = '';

  //theme status
  @Input() darkMode: boolean = false;
  @Output() darkModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleDarkMode(){
    this.darkMode = !this.darkMode;
    this.darkModeChange.emit(this.darkMode);
  }

  user$ = new Observable<GitHubSearch>();
  lastUser: GitHubSearch = {
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
  };

  getUser(username: string){
    this.user$ = this.githubService.getData(username).pipe(
      shareReplay(),
      take(1),
      startWith(this.lastUser)
    )
    this.user$.subscribe(user => {
    this.lastUser = user});

  }


  ngOnInit(): void {
    this.getUser("octocat");
    
  }

}
