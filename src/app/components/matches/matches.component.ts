import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private activeRoute: ActivatedRoute) { }

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
    const playerPuuId = this.activeRoute.snapshot.paramMap.get('puuId');
    const playerIndex = player.findIndex((player) => player.puuId === playerPuuId);
    return playerIndex;
  }

}
