import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import DomToImage from 'dom-to-image';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.scss'
})
export class CardPlayerComponent {
  screenshot() {
    const image = document.createElement('img');
    const cardPlayer: any = document.querySelector('#card-player');

    DomToImage.toPng(cardPlayer)
      .then((dataUrl: any) => {
        image.src = dataUrl;

        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'print-last-game.png';
        link.appendChild(image);
        link.click();

      }).catch((err: Error) => console.error('Erro ao converter a div em imagem:', err));
  }
}
