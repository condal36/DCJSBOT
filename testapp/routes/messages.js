var express = require('express');
var axios = require('axios');
var router = express.Router();
const dotenv = require('dotenv');
dotenv.config(); 
const bottoken = process.env.Discordtoken;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
/* GET home page. */
router.get('/', async function(req, res, next) {

  await axios({
    method:'POST',
    url:"https://discord.com/api/channels/607599139575824406/messages",
    headers:{
      Authorization:`Bot ${bottoken}`
    },
    data:{
      "content": '十點整 大家晚上好',
      "tts": false,
      "//embeds": [{
        "//title": "Hello, Embed!",
        "//description": "This is an embedded message."
      }]
    }
  });
  res.send("Done!");
});
router.post('/sendMsgToChannel',async function(req, res, next) {
  console.log(req.method, req.url);
  await axios({
    method:'POST',
    url:"https://discord.com/api/channels/"+req.body.guid+"/messages",
    headers:{
      Authorization:`Bot ${bottoken}`
    },
    data:{
      "content": req.body.msg,
      "tts": false,
      "//embeds": [{
        "//title": "Hello, Embed!",
        "//description": "This is an embedded message."
      }]
    }
  });
  res.send("Done!");
})
module.exports = router;
