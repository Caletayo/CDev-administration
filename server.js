const app = require('express')();

app.get('/', (req, res) => res.send('Bot is Online, Coded by Tomato6966 and Modified by PHV#3071'));

module.exports = () => {
  app.listen(3000);
}