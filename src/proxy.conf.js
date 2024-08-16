const PROXY_CONFIG = [
  {
    context: [
      '/riot/account/v1/accounts/by-riot-id'
    ],
    target: "https://americas.api.riotgames.com",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/": ""
    }
  },
  {
    context: [
      '/lol/summoner/v4/summoners/by-puuid'
    ],
    target: "https://br1.api.riotgames.com",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/": ""
    }
  },
  {
    context: [
      '/lol/league/v4/entries/by-summoner'
    ],
    target: "https://br1.api.riotgames.com",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/": ""
    }
  },
  {
    context: [
      '/lol/match/v5/matches'
    ],
    target: "https://americas.api.riotgames.com",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/": ""
    }
  },
  {
    context: [
      '/lol/match/v5/matches/by-puuid'
    ],
    target: "https://americas.api.riotgames.com",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/": ""
    }
  }
]

module.exports = PROXY_CONFIG
