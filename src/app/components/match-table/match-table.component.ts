import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlayer } from 'src/app/interfaces/IPlayer';

@Component({
  selector: 'app-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.scss']
})
export class MatchTableComponent {
  @Input() players: IPlayer[] = [];
  @Input() team: string = '';



  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }


  checkPlayer(playerPuuId: string): boolean | undefined {
    const puuId = this.activeRoute.snapshot.paramMap.get('puuId');
    if (puuId === playerPuuId) {
      return true;
    }
    return undefined;
  };

}
