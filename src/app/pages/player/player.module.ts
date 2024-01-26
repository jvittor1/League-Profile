import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { playerRoutes } from './player.routes';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PlayerComponent } from './player.component';
import { UserAreaComponent } from 'src/app/components/user-area/user-area.component';
import { ProfileComponent } from '../profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RankingAreaComponent } from 'src/app/components/ranking-area/ranking-area.component';
import { MasteryAreaComponent } from 'src/app/components/mastery-area/mastery-area.component';
import { HistoryComponent } from '../history/history.component';
import { MatchesComponent } from 'src/app/components/matches/matches.component';





@NgModule({
  declarations: [
    PlayerComponent,
    HeaderComponent,
    UserAreaComponent,
    ProfileComponent,
    RankingAreaComponent,
    MasteryAreaComponent,
    HistoryComponent,
    MatchesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(playerRoutes),
    FontAwesomeModule
  ]
})
export class PlayerModule { }
