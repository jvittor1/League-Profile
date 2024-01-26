import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMatch } from 'src/app/interfaces/IMatch';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  lastMatches: IMatch[] = [];

  constructor(private leagueService: LeagueService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMatches();
  }

  async getMatches() {
    const puuId = this.activatedRoute.snapshot.paramMap.get('puuId') || '';
    const matches = await this.leagueService.getMatches(puuId);
    this.lastMatches = matches;
    
  
    
  }
  
}
