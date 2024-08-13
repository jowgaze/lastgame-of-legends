import { Component } from '@angular/core';
import { CardPlayerComponent } from "../../shared/card-player/card-player.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { ContainerComponent } from "../../shared/container/container.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-last-game',
  standalone: true,
  imports: [CardPlayerComponent, HeaderComponent, ContainerComponent, FooterComponent],
  templateUrl: './last-game.component.html',
  styleUrl: './last-game.component.scss'
})
export class LastGameComponent {

}
