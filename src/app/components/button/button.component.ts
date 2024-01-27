import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  xMark = faXmark;
  
  constructor(private location: Location) { }

  goBack(){
    this.location.back();
  }
}
