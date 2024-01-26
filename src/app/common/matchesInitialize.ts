import { playerInitialize } from './playerInitialize';
export function matchesInitialize() {
    return{
        matchId: '',
        duration: '',
        gameMode: '',
        date: '',
        participants: [playerInitialize()],
    }
}

