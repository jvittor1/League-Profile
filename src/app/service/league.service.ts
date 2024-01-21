import { Injectable } from '@angular/core';
import { environment } from 'src/environment.api';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

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
    const apiURL = environment.mostPlayedChamp + puuId + '?api_key=' + environment.apiKey;

    const response = await fetch(apiURL);

    const data = await response.json();

    const mostPlayedChamp = data[0].championId;
    console.log(mostPlayedChamp);
    
    return mostPlayedChamp;

  }


  async getChampImg() {
    const champId = await this.getMostPlayedChamp();
    const champName = await this.getChampById(champId);
    const champImg = environment.champImgUrl + champName + '_0.jpg';
    console.log(champImg);
    
    return champImg;
  }



  async getUser(){
    const puuId = environment.puuId;
    const apiURL = environment.getUserUrl + puuId + '?api_key=' + environment.apiKey;

    const response = await fetch(apiURL);
    console.log(response);
    
    return await response.json();
  }

}

