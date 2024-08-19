export interface MatchInfo {
  info: {
    participants: [{
      puuid: string;
      championName: string;
      summoner1Id: number;
      summoner2Id: number;
      deaths: number;
      kills: number;
      assists: number;
      item0: number;
      item1: number;
      item2: number;
      item3: number;
      item4: number;
      item5: number;
      item6: number; // ward
      win: boolean;
      totalMinionsKilled: number;
      challenges: {
        kda: number;
      }
    }]
  }
}
