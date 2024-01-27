import { Injectable } from '@angular/core';
import { environment } from 'src/environment.api';
import { setMatches, setRanking, setUser } from '../common/services.functions';
import { IMatch } from '../interfaces/IMatch';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  apiUrl = 'http://localhost:4000/';

  constructor() { }


  async getChampById(id: number) {
    try {
      const apiURL = environment.champNameById;
  
      const response = await fetch(apiURL);
  
      const data = await response.json();
      const championsData = data.data;
  
      for (const championKey in championsData) {
        const champion = championsData[championKey];
        if (champion.key === id.toString()) {
          return champion.id;
        }
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  }
  

  async getMostPlayedChamp() {
    const puuId = environment.puuId;
    const apiURL = this.apiUrl + 'mostPlayedChamp/' + puuId;

    const response = await fetch(apiURL);
    const data = await response.json();
    const championId = data.championId;
    return championId;

  }


  async getMasteries() {
    const puuId = environment.puuId;
    const apiURL = this.apiUrl + 'mainChamps/' + puuId;
    const response = await fetch(apiURL);
    const data = await response.json();
    const masteries = data;
    return masteries;
  }


  async getChampImg() {
    const champId = await this.getMostPlayedChamp();
    const champName = await this.getChampById(champId);
    const champImg = environment.champImgUrl + champName + '_0.jpg';
    console.log(champImg);
    
    return champImg;
  }

  async getChampsImg() {
    const imgUrl: string[] = []; // Declare imgUrl as an array
    const champId = await this.getMasteries();
    champId.forEach(async (champ: any) => {
      const champName = await this.getChampById(champ.championId);
      imgUrl.push(environment.champImgUrl + champName + '_0.jpg');
   
    });
    
    return imgUrl;
  }

  async getSummoner() {
    const puuId = environment.puuId;
    const apiURL = this.apiUrl + 'summoner/' + puuId;
    const response = await fetch(apiURL);
    return setUser(await response.json());
  }
  


  async getRanking(summonerId: string) {
    const apiURL = this.apiUrl + 'rank/' + summonerId;
    
    const response = await fetch(apiURL);
    const data = await response.json();
    
    return setRanking(data[0]);

  }


  async getMatches(puuId: string) {
    const allMatches: IMatch[] = [];

    const apiURL = this.apiUrl + 'matches/' + puuId;
    const response = await fetch(apiURL);
    const data = await response.json();
    const matches = data.slice(0, 5);
  
    
    matches.forEach(async (match: any) => {
      const matchData = await this.getMatch(match);
      allMatches.push(matchData);
    });
 
    
    return allMatches;

  }


  async getMatch(matchId: string) {
    const apiURL = this.apiUrl + 'match/' + matchId;
    const response = await fetch(apiURL);
    const data = await response.json(); 
    const newMatch = setMatches(data);
    return newMatch;
  }

}

