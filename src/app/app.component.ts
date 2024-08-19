import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardPlayerComponent } from './shared/card-player/card-player.component';
import { HeaderComponent } from './shared/header/header.component';
import { SearchComponent } from './shared/search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardPlayerComponent, HeaderComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
