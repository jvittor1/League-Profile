import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private activeRoute = new BehaviorSubject<string>('');
  activeRoute$: Observable<string> = this.activeRoute.asObservable();

  setActiveRoute(route: string) {
    this.activeRoute.next(route);
  }


}
