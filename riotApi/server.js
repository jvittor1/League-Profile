var express = require('express');
var cors = require('cors');
const axios = require('axios');
var app = express();
app.use(cors());

const apiKey = ''; // Adicionar a API Key da Riot Games



app.get('/matches/:puuid', function (req, res) {
    const puuid = req.params.puuid;
    axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${apiKey}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    
}
);

app.get('/match/:matchId', function (req, res) {
    const matchId = req.params.matchId;
    axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });

});


app.get('/mostPlayedChamp/:puuid', function (req, res) {
    const puuid = req.params.puuid;
    axios.get(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}?api_key=${apiKey}`)
        .then(response => {
            res.json(response.data[0]);
        })
        .catch(error => {
            console.log(error);
        });
});


app.get('/mainChamps/:puuid', function (req, res) {
    const puuid = req.params.puuid;
    axios.get(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}?api_key=${apiKey}`)
        .then(response => {
            res.json(response.data.slice(0, 3));
        })
        .catch(error => {
            console.log(error);
        });
});


app.get('/summoner/:puuid', function (req, res) {
    const puuid = req.params.puuid;
    axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${apiKey}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});


app.get('/rank/:summonerId', function (req, res) {
    const summonerId = req.params.summonerId;
    axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${apiKey}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});


app.get('/summoner/:summonerName/:tagName', function (req, res) {
    const summonerName = req.params.summonerName;
    const tagName = req.params.tagName;
    axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/${tagName}?api_key=${apiKey}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});


app.listen(4000, function () {
    console.log('CORS-enabled web server listening on port 4000')
});