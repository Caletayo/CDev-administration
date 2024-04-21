const express = require('express');
const app = express();
const port = 3000 || 8080;

app.all('/', (req, res) => {
  // res.setHeader('Content-Type', 'text/html');
  res.send(`<a href="https://discord.gg/MCYVYNXKXj"><img src="https://media.discordapp.net/attachments/945572599528841226/952223857438236732/standard_1.gif"></a>`);
  res.end();
});
function k() {
  app.listen(port, () => {
    console.log("24/7 KeepAlive Server is online!".bgGreen.white)
  });
}
module.exports = k;

