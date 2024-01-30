import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMatch } from 'src/app/interfaces/IMatch';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  lastMatches: IMatch[] = [];

  constructor(private leagueService: LeagueService, private router: Router) { }

  ngOnInit(): void {
    this.getMatches();
  }

  async getMatches() {
    const playerPuuId = this.router.url.split('/')[2] || ''
    const matches = await this.leagueService.getMatches(playerPuuId);
    this.lastMatches = matches;
    
  }
  
}
