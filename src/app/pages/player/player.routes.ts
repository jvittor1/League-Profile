import { Routes } from "@angular/router";
import { PlayerComponent } from "./player.component";
import { ProfileComponent } from "../profile/profile.component";
import { HistoryComponent } from "../history/history.component";
import { MatchDetailsComponent } from "src/app/pages/match-details/match-details.component";

export const playerRoutes: Routes = [
    {
        path: '',
        component: PlayerComponent,
        children: [
            {
                path: '',
                redirectTo: `profile`,
                pathMatch: 'full'
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'history',
                children: [
                    {
                        path: '',
                        component: HistoryComponent
                    },
                    {
                        path: ':matchId',
                        component: MatchDetailsComponent
                    }
                ]
            }
        ]
    }
];