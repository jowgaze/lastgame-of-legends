import { Account } from './../../core/types/account';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { SearchComponent } from '../../shared/search/search.component';
import { CardPlayerComponent } from '../../shared/card-player/card-player.component';
import { Router } from '@angular/router';
import { ContainerComponent } from '../../shared/container/container.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PlayerService } from '../../services/player.service';
import { RequestPlayer } from '../../core/types/requestPlayer';
import { Summoner } from '../../core/types/summoner';
import { League } from '../../core/types/league';
import { MatchInfo } from '../../core/types/matchInfo';
import { Player } from '../../core/types/player';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SearchComponent, CardPlayerComponent, ContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    localStorage.clear();
  }

}
