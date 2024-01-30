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
    this.getSelected()
  }


  setSelected(selected: string) {

    
    if (this.selected !== selected) {
        this.selected = selected;
        this.router.navigate([`/player/${this.user.puuId}/${selected}`]);
        // console.log(`/player/${this.user.puuId}/${selected}`);
        // console.log('selected', selected);
        this.routeService.setActiveRoute(selected);

    }
}



  getSelected() {
    const selectedPage = this.router.url.split('/')[3];
    this.selected = selectedPage;
    this.routeService.setActiveRoute(selectedPage);
    
  }

}
