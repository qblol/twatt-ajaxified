var express = require('express');
var router = express.Router();
const Twitter = require('twitter');
const keys = require('../keys');

const client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_secret
})

/* GET home page. */
router.get('/', function(req, res, next) {
  client.get('statuses/user_timeline', {screen_name: req.query.q}, function(error, tweets, response) {
      console.log(tweets);
      res.send(tweets)
  })
})

router.post('/new-twit', function(req, res, next) {
  client.post('statuses/update', {status: req.body.twit}, function (error, tweets, response) {
    res.send(tweets)
  })
})

module.exports = router;
