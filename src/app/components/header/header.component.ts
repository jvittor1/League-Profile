import { Component, Input } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { userInitialize } from 'src/app/common/userInitialize';
import { IUser } from 'src/app/interfaces/IUser';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  @Input() user: IUser =  userInitialize();
  
  selected: string = '';

  constructor(private router: Router, private routeService: RouterService) { }


  ngOnInit(): void {
    this.getSelected();
  }


  setSelected(selected: string) {
    if (this.selected !== selected) {
        this.selected = selected;
        this.router.navigate([`/player/${selected}/${this.user.puuId}`]);
        console.log(`/player/${selected}/${this.user.puuId}`);
        
        this.routeService.setActiveRoute(selected);

    }
}



  getSelected() {
    this.setSelected(this.router.url.split('/')[2]);  
  }

}
