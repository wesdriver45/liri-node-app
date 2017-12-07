//essential packages and such
var fs = require("fs");
var request = require("request");
var inquirer = require("inquirer");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");

//twitter function
var myTweets = function() {
	var client = new twitter(keys.twitterKeys);
	client.get(path, params, callback);





}
