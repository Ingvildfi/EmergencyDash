console.log('The Twitterbot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config); 

T.get('search/tweets', {geocode: '60.39288,5.32112,3km', q: 'bergen', count: 3},

	function geoData(err, data, response) {
	var tweet;
	var tweets = []; 
	for (i = 0; i < data.statuses.length; i++) {
		tweet = data.statuses[i];
		if(tweet.get != null || tweet.coordinates != null){
			console.log("Name:");
			console.log(tweet.user.name);
			console.log("Tweet:");
			console.log(tweet.text);
			console.log("Coordinates:");
			console.log(tweet.coordinates.coordinates);
			console.log("");
			tweets.push(tweet.coordinates.coordinates);
			console.log(tweets);
		}
	}
});