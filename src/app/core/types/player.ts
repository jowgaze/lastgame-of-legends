import { Account } from './account';
import { MatchInfo } from './matchInfo';
import { Summoner } from './summoner';
import { League } from "./league";

export class Player {
  version: string = "14.15.1";

  // Player Info
  gameName: string;
  tagLine: string;
  id: string;
  puuid: string;
  profileIconId: string;
  summonerLevel: number;
  leagues!: League[];

  // Match Info
  championName: string;
  item0: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  ward: string;
  spell1: string;
  spell2: string;
  kills: number;
  deaths: number;
  assists: number;
  cs: number;
  kda: string;
  gameStatus!: 'win' | 'loss';

  constructor(account: Account, summoner: Summoner, league: League[], match: MatchInfo) {
    this.gameName = account.gameName;
    this.tagLine = account.tagLine;
    this.id = summoner.id;
    this.puuid = account.puuid;
    this.profileIconId = `https://cdn.communitydragon.org/${this.version}/profile-icon/${summoner.profileIconId}`;
    this.summonerLevel = summoner.summonerLevel;

    this.leagues = league;

    let index;
    for(index = 1; match.info.participants[index].puuid != account.puuid; index++);

    this.championName = `https://cdn.communitydragon.org/${this.version}/champion/${match.info.participants[index].championName}/square`;
    this.item0 = this.getItem(match.info.participants[index].item0);
    this.item1 = this.getItem(match.info.participants[index].item1);
    this.item2 = this.getItem(match.info.participants[index].item2);
    this.item3 = this.getItem(match.info.participants[index].item3);
    this.item4 = this.getItem(match.info.participants[index].item4);
    this.item5 = this.getItem(match.info.participants[index].item5);
    this.ward = this.getItem(match.info.participants[index].item6);
    this.spell1 = `https://lolcdn.darkintaqt.com/cdn/spells/${match.info.participants[index].summoner1Id}`
    this.spell2 = `https://lolcdn.darkintaqt.com/cdn/spells/${match.info.participants[index].summoner2Id}`

    this.kills = match.info.participants[index].kills;
    this.deaths = match.info.participants[index].deaths;
    this.assists = match.info.participants[index].assists;
    this.cs = match.info.participants[index].totalMinionsKilled;
    this.kda = match.info.participants[index].challenges.kda.toFixed(2);

    if (match.info.participants[index].win) {
      this.gameStatus = 'win';
    } else {
      this.gameStatus = 'loss';
    }

  }

  getItem(item: number): string {
    if (item == 0)
      return "/assets/images/void.png";

    return `https://ddragon.leagueoflegends.com/cdn/${this.version}/img/item/${item}.png`
  }
}
