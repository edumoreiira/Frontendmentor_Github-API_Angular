import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubSearchComponent } from './components/github-search/github-search.component';
import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GitHubSearchService } from './services/git-hub-search.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GithubSearchComponent, NgClass, HttpClientModule],
  providers:[GithubSearchComponent, GitHubSearchService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Frontendmentor_Github-API_Angular';

  theme: boolean = true; 
  toggleDarkMode(value: boolean){
    this.theme = value;
  }
  ok(){
    console.log(this.theme)
  }
}
