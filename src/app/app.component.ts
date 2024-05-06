import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubSearchComponent } from './components/github-search/github-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GithubSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Frontendmentor_Github-API_Angular';
}
