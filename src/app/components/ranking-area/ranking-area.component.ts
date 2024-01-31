import { Component, Input } from '@angular/core';
import { rankingInitialize } from 'src/app/common/rankingInitialize';
import { IRanking } from 'src/app/interfaces/IRanking';


@Component({
  selector: 'app-ranking-area',
  templateUrl: './ranking-area.component.html',
  styleUrls: ['./ranking-area.component.scss']
})
export class RankingAreaComponent {
  
  @Input() ranking: IRanking = rankingInitialize();

  ngOnInit(): void {
  }

  replaceUnderscores(inputString: string): string {
    return inputString.replace(/_/g, ' ');
  }
  
  getRankingImageURL(ranking: string){ 
    return `../../../assets/images/Season_2023_-_${ranking.charAt(0) + ranking.slice(1).toLowerCase()}.webp`;
  }

  checkRank(){
    if(this.ranking.queueType === '' || this.ranking.tier === ''){
      return false;
    }
    return true;
  }

}
