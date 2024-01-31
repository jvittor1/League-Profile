import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { matchesInitialize } from 'src/app/common/matchesInitialize';
import { IMatch } from 'src/app/interfaces/IMatch';
import { IPlayer } from 'src/app/interfaces/IPlayer';
import { Location } from '@angular/common';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent {

  matchId: string = this.activeRoute.snapshot.params['matchId'];
  matchDetails: IMatch = matchesInitialize();
  team1: IPlayer[] = [];
  team2: IPlayer[] = [];

  constructor(private activeRoute: ActivatedRoute, private leagueService: LeagueService, private location: Location) { }


  ngOnInit(): void {
    this.getMatchDetails();
  
    
  }

  async getMatchDetails() {
    this.matchDetails = await this.leagueService.getMatch(this.matchId);
    this.defineTeams(this.matchDetails);
    
  }


  defineTeams(matches: IMatch) {
    this.team2 = matches.participants.slice(0, 5);
    this.team1 = matches.participants.slice(5, 10);
  }

  goBack() {
    this.location.back();
  }
}
