import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { SearchComponent } from '../../shared/search/search.component';
import { CardPlayerComponent } from '../../shared/card-player/card-player.component';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from '../../shared/container/container.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SearchComponent, CardPlayerComponent, ContainerComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
