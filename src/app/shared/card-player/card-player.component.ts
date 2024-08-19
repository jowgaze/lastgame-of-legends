import { NgClass, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import DomToImage from 'dom-to-image';

import { Player } from '../../core/types/player';
import { RankComponent } from '../rank/rank.component';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgForOf, RankComponent, NgClass],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.scss'
})
export class CardPlayerComponent {
  @Input() playerInfo !: Player;


  screenshot() {
    const image = document.createElement('img');
    const cardPlayer: any = document.querySelector('#card-player-screenshot');

    DomToImage.toPng(cardPlayer)
      .then((dataUrl: any) => {
        image.src = dataUrl;

        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${this.playerInfo.gameName}#${this.playerInfo.tagLine}-lastgame.png`;
        link.appendChild(image);
        link.click();

      }).catch((err: Error) => console.error('Erro ao converter a div em imagem:', err));
  }
}
