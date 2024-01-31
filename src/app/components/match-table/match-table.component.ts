import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPlayer } from 'src/app/interfaces/IPlayer';

@Component({
  selector: 'app-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.scss']
})
export class MatchTableComponent {
  @Input() players: IPlayer[] = [];
  @Input() team: string = '';



  constructor(private router: Router) { }

  ngOnInit(): void {

  }


  checkPlayer(playerPuuId: string): boolean | undefined {
    const puuId = this.router.url.split('/')[2] || ''
    if (puuId === playerPuuId) {
      return true;
    }
    return undefined;
  };


  goToUserProfile(puuId: string) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; 
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([`/player/${puuId}`]);
  }

}
