import { Account } from './../core/types/account';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { RequestPlayer } from '../core/types/requestPlayer';
import { Summoner } from '../core/types/summoner';
import { League } from '../core/types/league';
import { MatchInfo } from '../core/types/matchInfo';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiKey: string = environment.apiKey;

  constructor(private httpClient: HttpClient) { }

  public getAccount(player: RequestPlayer): Observable<Account> {
    const http$ = `/${player.gameName}/${player.tagLine}?api_key=${this.apiKey}`;
    return this.httpClient.get<Account>('/riot/account/v1/accounts/by-riot-id' + http$);
  }

  public getSummoner(puuid: string): Observable<Summoner> {
    const http$ = `/${puuid}?api_key=${this.apiKey}`;

    return this.httpClient.get<Summoner>('/lol/summoner/v4/summoners/by-puuid' + http$);
  }

  public getLeague(id: string): Observable<League[]>{
    const http$ = `/${id}?api_key=${this.apiKey}`;

    return this.httpClient.get<League[]>('/lol/league/v4/entries/by-summoner' + http$);
  }


  public getMatchId(puuid: string): Observable<string[]>{
    const http$ = `/${puuid}/ids?start=0&count=20&api_key=${this.apiKey}`;

    return this.httpClient.get<string[]>('/lol/match/v5/matches/by-puuid' + http$);
  }

  public getMatch(matchId: string): Observable<MatchInfo>{
    const http$ = `/${matchId}?api_key=${this.apiKey}`;

    return this.httpClient.get<MatchInfo>('/lol/match/v5/matches' + http$);
  }
}
