import { IPlayer } from "./IPlayer";

export interface IMatch {
    matchId: string,
    duration: string,
    gameMode: string,
    date: string,
    participants: IPlayer[],
}