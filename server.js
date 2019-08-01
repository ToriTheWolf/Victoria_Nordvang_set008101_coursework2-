// By Victoria Nordvang; Edinburgh Napier University student
// Coursework 2 for SET08101 - Web Technologies
// Finished on 31/07/2019

const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
var port = 8081;

var dbPath = path.resolve(__dirname , 'count.db');
var db = new sqlite3.Database(dbPath);



db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS messages (messageId INTEGER AUTO_INCREMENT, sender TEXT, receiver TEXT, time TIMESTAMP , encryptionMethod TEXT, encryptedMessage TEXT)");
    db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['Terra', 'pass']);
    db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['fer', 'fer']);
    db.run("INSERT INTO messages (sender, receiver, encryptionMethod, encryptedMessage) VALUES (?,?,?,?)", ['fer', 'Terra', 'MD5', 'Hello']);
});

app.use(express.urlencoded());
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/images'));

app.get('/about',function(req,res) {
    res.sendFile(path.join(__dirname+'/cipherinfo.html'))
});

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'/index.html'))
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    let sql = "Select password from users where username = ?";
    db.get(sql,[username], function (err, row) {
        if(password === row.password){
            res.redirect('http://localhost:8081/logged/'+username)
        }else{
            res.redirect('http://localhost:8081/')
        }
    });
});
/*
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    let sql = "Insert into users(username, password) values(?, ?)", ['username', 'password']`, ['C'], function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log(`A row has been inserted with rowid ${this.lastID}`);
		db.close();
});*/
app.get('/logged/:username', (req, res) => {
    let sql = "Select * from messages where reciever = ?";
    db.get(sql,[req.params.username], function (err, row) {
        if(row){
            res.send(row);
        }else{
            res.send('no messages for '+req.params.username);
        }
    });
});
/*
app.post('/logged/sendMsg', (req, res) => {
	var sender = req.body.username;
	var reciever = req.body.send2user;
	var enctyptionMethod = req.body.encryptionMethod;
	var encryptedMessage = req.body.message;
    let sql = "Insert into messages(sender, reciever, encryptionMethod, encryptedMessage) values(?, ?, ?, ?)", [sender, reciever, encryptionMethod, encryptedMessage]`, ['C'], function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log(`A row has been inserted with rowid ${this.lastID}`);
		db.close();
});
*/
/*
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

function caesarEncrypt(str,num) {
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
function caesarDecrypt(str,num) {
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
		var newIndex = currentIndex - num;
		if(newIndex > 25) newIndex = newIndex - 26;
		if (newIndex < 0) newIndex = newIndex + 26;
		if(str[i].toUpperCase()) {
			newStr += alphabet[newIndex];
		}
		else newStr += alphabet[newIndex];
	}
	return newStr;
} */
app.listen(port, () => console.log('Example app listening on port' + port));
