
const fs = require("fs");
const path = require("path");

const MintColor = require("./color");
const MintPalette = require("./palette");
const MintTemplate = require("./template");

function MintApp () {
	this.preferences = JSON.parse(fs.readFileSync("preferences.json"));
	this.paths = this.preferences.paths;
	this.colors = [];
	this.palettes = [];
}

MintApp.prototype.helloWorld = function () {
	// console.log("MintApp says hello.");
	console.log(this.paths);
}



module.exports = MintApp;
