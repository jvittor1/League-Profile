import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  @Input() user: string =  '';
  
  selected: string = 'profile';

  constructor() { }


  ngOnInit(): void {
  }


  // Function to set the selected tab
  setSelected(selected: string) {
    this.selected = selected
  }

}
