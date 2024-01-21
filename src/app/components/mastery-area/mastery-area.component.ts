import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mastery-area',
  templateUrl: './mastery-area.component.html',
  styleUrls: ['./mastery-area.component.scss']
})
export class MasteryAreaComponent {


  @Input() mainChampion: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
