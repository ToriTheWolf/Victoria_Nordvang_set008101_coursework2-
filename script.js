import sqlite3;
var express = express = require('express');
var app = express();
let db = sqlite3.Database('.\sqlite\cyphermania.db');

var user = '';

//supposed to have a different .js for each page calling functions from this one.

function atbash(str) {
	var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	var reAlphabet = "zyxwvutsrqponmlkjihgfedcba".split("");
	
	for (i = 0; i < message.length; i++) {
		var cryptLetter = str.charAt (i);
		if (/[a-z]/.test(str[i])); {
			cryptMsg = cryptMsg+str[i];
			}
			else if ()
		}
		return cryptMsg;
	}
}

function caesar(str,num) {
	num = num % 26;
	var lCaseStr = str.toLowerCase();
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var newStr = '';
	
	for(var i = 0; i < lCaseStr.length; i++) {
		var currentLetter = lCaseStr[i];
		if(currentLetter === ' ') {
			newStr += currentLetter;
			continue;
		
		}
		var currentIndex = alphabet.indexOf(currentLetter);
		var newIndex = currentIndex + num;
		if(newIndex > 25) newIndex = newIndex - 26;
		if (newIndex < 0) newIndex = newIndex + 26;
		if(str[i].toUpperCase()) {
			newStr += alphabet[newIndex];
		}
		else newStr += alphabet[newIndex];
	}
	return newStr;
}
function verifyLogin(fpass) {
	// this one is supposed to compare username with every data in row, and then compare the password to the one stored.
	// then it should print them neatly in a way that they will be a link to open the message
	// was thinking to make it just display all messages as you open the page.
}
function sendMsg(sender, reciever, cryptMsg) {
	//adds new message to table using db INSERT
}
function verifyUsername(fusrnm) {
	// checks if username exists already, returns value 1/0.
	//makes cookie so code knows whos logged in
	// Used to make sure useernames are unique, and to make sure reciever is written in properly when sending a new message.
}

function signUp(fusrnm, fpass, femail) {
	//adds new user to database
	
}
function signOut(fusrnm) {
	//delete cookie and redirect to sign in
}
function displayMsgs(sender, reciever, msg) { 
	// it should print them neatly in a way that they will be a link to open the message
	// was thinking to make it just display all messages as you open the page.
	// express
	let sql = SELECT sender, date FROM messages WHERE reciever = 'user' ;
}