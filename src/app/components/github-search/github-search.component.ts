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
  lastUser!: GitHubSearch;
  error!: string | null;
  // this.githubService.getData(username).subscribe(
  //   (user: GitHubUser) => {
  //     this.user = user;
  //     this.loading = false; // Define loading como false quando a resposta é recebida com sucesso
  //   },
  //   (error) => {
  //     this.error = "User not found"; // Define a mensagem de erro
  //     this.loading = false; // Define loading como false em caso de erro
  //   }
  // );

  getUser(username: string){
    this.user$ = this.githubService.getData(username).pipe(
      shareReplay(),
      take(1),
      startWith(this.lastUser)
    )
    this.user$.subscribe(user => {
    this.lastUser = user
    this.error = null;
    },
    (error) => {
      this.error = "User not found!";
    }
  );
  }


  ngOnInit(): void {
    this.getUser("octocat");
    
  }

}
