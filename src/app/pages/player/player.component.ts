import { Component } from '@angular/core';
import { userInitialize } from 'src/app/common/userInitialize';
import { IUser } from 'src/app/interface/IUser';
import { LeagueService } from 'src/app/service/league.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  urlChamp: string = ''
  user: IUser = userInitialize();

  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void {
    // this.getChampUrl();
    // this.getUser();
  }

  async getChampUrl() {
    this.urlChamp = await this.leagueService.getChampImg();
    console.log(this.urlChamp);
  }

  async getUser(){
    this.user = await this.leagueService.getUser();
    console.log(this.user);
  }
  

}


