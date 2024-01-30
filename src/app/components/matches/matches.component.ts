import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { matchesInitialize } from 'src/app/common/matchesInitialize';
import { IMatch } from 'src/app/interfaces/IMatch';
import { IPlayer } from 'src/app/interfaces/IPlayer';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent {

  @Input() match: IMatch = matchesInitialize();

  constructor(private router: Router) { }

  ngOnInit(){
    console.log(this.match);
    
  }

  calcDate(timeStamp: string){
    const gameEndTime = new Date(timeStamp);
    const date = gameEndTime.toLocaleDateString();
    return date;
  }

  calcDuration(duration: string){
    const timeInSeconds = Number(duration);
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const paddedSeconds = String(seconds).padStart(2, '0'); 
    return `${minutes}:${paddedSeconds}`;
}



  getPlayerIndex(player: IPlayer[]){
    const playerPuuId = this.router.url.split('/')[2] || ''

    
    const playerIndex = player.findIndex((player) => player.puuId === playerPuuId);
    return playerIndex;
  }


  getMatchDetails(matchId: string){
    const playerPuuId = this.router.url.split('/')[2] || ''
    this.router.navigate([`/player/${playerPuuId}/history/${matchId}`]);

  }

}
