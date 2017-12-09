//essential packages and such
var fs = require("fs");
var request = require("request");
var inquirer = require("inquirer");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("node-spotify-api");

var userCommand = process.argv[2];

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
			console.log("Please enter a valid command.\n Choices: my-tweets, spotify-this-song, movie-this, do-what-it-says.");
	};
};


// //twitter function
// var myTweets = function() {
// 	var client = new twitter(keys.twitterKeys);
// 	client.get(path, params, callback);
// }