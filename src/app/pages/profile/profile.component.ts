import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { rankingInitialize } from 'src/app/common/rankingInitialize';
import { userInitialize } from 'src/app/common/userInitialize';
import { IRanking } from 'src/app/interfaces/IRanking';
import { IUser } from 'src/app/interfaces/IUser';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    user: IUser = userInitialize();
    ranking: IRanking = rankingInitialize();
    masteryChamps: string[] = [''];
    continue: boolean = false;

    constructor(private leagueService: LeagueService, private router: Router) { }
  
    ngOnInit(): void {
      this.getChampsImg();
      this.getSummoner()
        .then(() => {
          this.getRanking();
          this.continue = true;

        });
      }

    async getSummoner(){
      const playerPuuId = this.router.url.split('/')[2] || ''
      this.user = await this.leagueService.getSummoner(playerPuuId);
    }

    async getRanking(){
      this.ranking = await this.leagueService.getRanking(this.user.summonerId);
      
    }

    async getChampsImg(){
      const playerPuuId = this.router.url.split('/')[2] || ''
      this.masteryChamps = await this.leagueService.getChampsImg(playerPuuId);
    }
}
