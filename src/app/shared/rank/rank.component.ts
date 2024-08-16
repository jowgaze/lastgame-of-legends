import { Component, Input, OnInit } from '@angular/core';
import { League } from '../../core/types/league';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-rank',
  standalone: true,
  imports: [NgClass],
  templateUrl: './rank.component.html',
  styleUrl: './rank.component.scss'
})
export class RankComponent implements OnInit {
  @Input() league !: League;
  public wr !: number;
  public queueType !: string;
  public wrStatus: 'win' | 'loss' = 'loss';

  ngOnInit(): void {
    this.wr = Math.round((this.league.wins * 100) / (this.league.wins + this.league.losses));

    if(this.wr >= 50)
      this.wrStatus = 'win';
    else
      this.wrStatus = 'loss';

    if (this.league.queueType == 'RANKED_SOLO_5x5')
      this.queueType = 'Solo';
    else
      this.queueType = 'Flex';
  }
}
