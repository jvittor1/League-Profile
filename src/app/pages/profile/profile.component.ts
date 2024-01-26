import { Component } from '@angular/core';
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

    constructor(private leagueService: LeagueService) { }
  
    ngOnInit(): void {
      this.getChampsImg();
      this.getSummoner()
        .then(() => {
          this.getRanking();
          this.continue = true;

        });
      }

    async getSummoner(){
      this.user = await this.leagueService.getSummoner();
    }

    async getRanking(){
      this.ranking = await this.leagueService.getRanking(this.user.summonerId);
      
    }

    async getChampsImg(){
      this.masteryChamps = await this.leagueService.getChampsImg();
    }
}
