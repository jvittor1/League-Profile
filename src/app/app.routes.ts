import { Routes } from "@angular/router";
import { environment } from "src/environment.api";

export const routes: Routes = [
    {
        path: '',
        redirectTo: `player/${environment.defaultUser}`,
        pathMatch: 'full'
        
    },
    {
        path: 'player/:puuId',
        loadChildren: () => import('./pages/player/player.module').then(m => m.PlayerModule)
    }
]