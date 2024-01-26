import { IMatch } from "../interfaces/IMatch";
import { IPlayer } from "../interfaces/IPlayer";

export function setUser(user: any){
    return {
        puuId: user.puuid,
        name: user.name,
        level: user.summonerLevel,
        summonerId: user.id,
    };
}



export function setRanking(ranking: any){
    return {
        queueType: ranking.queueType,
        tier: ranking.tier,
        rank: ranking.rank,
    };
}



export function setMatches(match: any): IMatch {
    const participants: IPlayer[] = [];

    for (const participant of match.info.participants) {
        participants.push({
            championName: participant.championName,
            championId: participant.championId,
            championLevel: participant.champLevel,
            deaths: participant.deaths,
            kills: participant.kills,
            assists: participant.assists,
            goldEarned: participant.goldEarned,
            puuId: participant.puuid,
            summonerName: participant.summonerName,
            kda: `${participant.kills}/${participant.deaths}/${participant.assists}`,
            totalMinionsKilled: participant.totalMinionsKilled,
            win: participant.win,
        });
    }

    return {
        matchId: match.metadata.matchId,
        duration: match.info.gameDuration,
        gameMode: match.info.gameMode,
        date: match.info.gameEndTimestamp,
        participants: participants,
    };
}
