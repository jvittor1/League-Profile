import { Routes } from "@angular/router";
import { PlayerComponent } from "./player.component";
import { ProfileComponent } from "../profile/profile.component";

export const playerRoutes: Routes = [
    {
        path: '',
        component: PlayerComponent,
        children: [
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            // {
            //     path: 'matches',
            //     component: matchsComponent
            // }


        ]
    }
]