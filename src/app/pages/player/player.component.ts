import { ChangeDetectorRef, Component } from '@angular/core';
import { userInitialize } from 'src/app/common/userInitialize';
import { IUser } from 'src/app/interfaces/IUser';
import { LeagueService } from 'src/app/services/league.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  urlChamp: string = ''
  user: IUser = userInitialize();
  activeRoute: string = '';

  constructor(
    private leagueService: LeagueService, 
    private routerService: RouterService, 
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getChampUrl();
    this.getSummoner();

    this.routerService.activeRoute$.subscribe(activeRoute => {
      this.activeRoute = activeRoute;
      console.log(this.activeRoute);
      
      this.cdr.detectChanges();
    })

  }

  async getChampUrl() {
    this.urlChamp = await this.leagueService.getChampImg();
  }
  
  async getSummoner(){
    this.user = await this.leagueService.getSummoner();
  }




}


