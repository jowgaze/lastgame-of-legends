import { Component } from '@angular/core';

import { CardPlayerComponent } from '../../shared/card-player/card-player.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../core/types/account';
import { League } from '../../core/types/league';
import { MatchInfo } from '../../core/types/matchInfo';
import { Player } from '../../core/types/player';
import { RequestPlayer } from '../../core/types/requestPlayer';
import { Summoner } from '../../core/types/summoner';
import { PlayerService } from '../../services/player.service';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-last-game',
  standalone: true,
  imports: [CardPlayerComponent, HeaderComponent, ContainerComponent, FooterComponent, NgxSpinnerModule],
  templateUrl: './last-game.component.html',
  styleUrl: './last-game.component.scss'
})
export class LastGameComponent {
  private playerRequest!: RequestPlayer;
  private account!: Account;
  private summoner!: Summoner;
  private league!: League[];
  private matchInfo!: MatchInfo;
  public player!: Player;

  constructor(private playerService: PlayerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService) {
    this.activatedRoute.params.subscribe(params => {
      this.playerRequest = new RequestPlayer(params['gameName'], params['tagLine']);
    });
  }

  ngOnInit(): void {
    localStorage.clear();
    this.getAccount();
  }

  public getAccount() {
    this.spinner.show();

    this.playerService.getAccount(this.playerRequest)
      .subscribe({
        next: account => {
          this.account = account;
          this.getSummoner(account.puuid);
        },
        error: err => {
          this.spinner.hide();
          console.error(err);
          alert("Nome ou Tag inválido.")
          this.router.navigate([""]);
        }
      });
  }

  public getSummoner(playerPuuid: string) {
    this.playerService.getSummoner(playerPuuid)
      .subscribe({
        next: summoner => {
          this.summoner = summoner;
          this.getLeague(summoner.id, playerPuuid)
        },
        error: err => {
          this.spinner.hide();
          console.error(err);
          alert("Erro ao recuperar informações do jogador.");
          this.router.navigate([""]);
        }
      });
  }

  public getLeague(id: string, playerPuuid: string) {
    this.playerService.getLeague(id)
      .subscribe({
        next: league => {
          this.league = league;
          this.getMatchId(playerPuuid);
        },
        error: err => {
          this.spinner.hide();
          console.error(err);
          alert("Erro ao recuperar informações do jogador.");
          this.router.navigate([""]);
        }
      });
  }

  getMatchId(playerPuuid: string) {
    this.playerService.getMatchId(playerPuuid)
      .subscribe({
        next: matchIds => this.getMatch(matchIds[0]),
        error: err => {
          this.spinner.hide();
          console.error(err);
          alert("Última partida não encontrada.");
          this.router.navigate([""]);
        }
      })
  }

  getMatch(matchId: string) {
    this.playerService.getMatch(matchId)
      .subscribe({
        next: match => {
          this.matchInfo = match;
          this.player = new Player(this.account, this.summoner, this.league, this.matchInfo);
          this.spinner.hide();
        },
        error: err => {
          this.spinner.hide();
          console.error(err);
          alert("Erro ao recuperar informação da última partida.");
          this.router.navigate([""]);
        }
      })
  }
}
