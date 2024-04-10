process.on("unhandledRejection", error => {
  return console.log(error)
});
const Discord = require("discord.js-selfasta");
const express = require('express')
const tokens = process.env.tokens.split("*");
const app = express();
app.listen(3030);
app.get("/", async (req, res) => {
  res.send("HI There").status(200);
})
process.on('uncaughtException', err => {
  console.error('There was an uncaught error', err);

});
let channelId = "1085180129065570337" //ايدي الروم
let messages = ["Hello?", "anyone here?", "this server is good i like it", "Please give me credits", "im trying to get in leaderboard", "lets play some music", "i don't like that!", "Yaaayy", "UWU"]
tokens.forEach(token => {

  const client = new Discord.Client({
    allowedMentions: {
      repliedUser: true
    }
  });
  client.on("ready", () => {
    console.log(client.user.username);
    let channel = client.channels.cache.get(channelId)
    setInterval(async () => {
      await channel.send(`${messages[Math.floor(Math.random() * messages.length)]}`)
    }, 6000) //1000 = 1s
  })
  client.login(token);
})
