const PROXY_CONFIG = [
  {
    context: [
      "/api/twitch/streams",
      "/api/twitch/vods",
      "/api/twitch/clips",
    ],
    target: "https://vgi.skele.club/",
    secure: true,
    changeOrigin: true,
    logLevel: "debug",
  }
]

module.exports = PROXY_CONFIG;
