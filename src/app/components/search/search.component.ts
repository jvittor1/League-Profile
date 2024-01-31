import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery: string = '';
  searchIcon = faSearch;
  xMark = faXmark;


  constructor(private leagueService: LeagueService, private router: Router) { }


  async handleSubmit(){
    if (this.searchQuery.includes('#')){
      const gameName = this.searchQuery.split('#')[0];
      const tag = this.searchQuery.split('#')[1];
      const result = await this.leagueService.getSummonerByName(gameName, tag);
      if (result){
        this.router.routeReuseStrategy.shouldReuseRoute = () => false; 
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([`/player/${result.puuid}`]);
      }
      
    }

  }


  clearInput(){
    this.searchQuery = '';

  }
}
