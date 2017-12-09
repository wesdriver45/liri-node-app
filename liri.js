//essential packages and such
var fs = require("fs");
var request = require("request");
var inquirer = require("inquirer");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("node-spotify-api");

//user input
var userCommand = process.argv[2];
var userInput = process.argv[3];

//switch case function for commands
var command = function(action) {
	switch(action) {
		case "my-tweets":
		myTweets();
		break;

		case "spotify-this-song":
		getSpotify();
		break;

		case "movie-this":
		getMovie();
		break;

		case "do-what-it-says":
		doThis();
		break;

		default:
			console.log("Please enter a valid command.\nChoices: my-tweets, spotify-this-songName, movie-this, do-what-it-says.");
			break;
	};
};


//twitter function
var myTweets = function() {
	var client = new twitter(keys.twitterKeys);

	var params = {screen_name: "Random_Namely", count: 20};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (error) {
			console.log(error);

			var data = [];
			for (var i = 0; i < tweets.length; i++) {
				data.push({
					"Tweets: " :tweets[i].text,
					"Created: " :tweets[i].created_at,
					
				})
			}
			console.log(data);		
		}
	});
}

//spotify function - artist, songName, link, album
var getSpotify = function(songName) {
	if (songName === undefined) {
		songName = "the sign";
	};

	spotify.search({type: "track", query: songName}, function(err, data) {
		if (err) {
			console.log(err);
			return;
		}

		var songs = data.tracks.items;
    	var data = []; 

    	for (var i = 0; i < songs.length; i++) {
      		data.push({
		        'artist(s)': songs[i].artists,
		        'song name: ': songs[i].name,
		        'preview song: ': songs[i].preview_url,
		        'album: ': songs[i].album.name,
      		});
    	}
    	console.log(data);

	});
};



//run the app
command(userCommand, userInput);



