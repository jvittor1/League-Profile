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





@NgModule({
  declarations: [
    PlayerComponent,
    HeaderComponent,
    UserAreaComponent,
    ProfileComponent,
    RankingAreaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(playerRoutes),
    FontAwesomeModule
  ]
})
export class PlayerModule { }
