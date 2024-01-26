import { Routes } from "@angular/router";
import { PlayerComponent } from "./player.component";
import { ProfileComponent } from "../profile/profile.component";
import { HistoryComponent } from "../history/history.component";
import { environment } from "src/environment.api";

export const playerRoutes: Routes = [
    {
        path: '',
        component: PlayerComponent,
        children: [
            {
                path: '',
                redirectTo: `profile/${environment.defaultUser}`,
                pathMatch: 'full'
            },
            {
                path: 'profile/:puuId',
                component: ProfileComponent
            },
            {
                path: 'history/:puuId',
                component: HistoryComponent
            }
        ]
    }
];