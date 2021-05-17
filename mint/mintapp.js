
const fs = require("fs");
const path = require("path");

const MintColor = require("./color");
const MintPalette = require("./palette");
const MintTemplate = require("./template");

function MintApp () {
	this.colors = [];
	this.palettes = [];
}

MintApp.prototype.helloWorld = function () {
	console.log("MintApp says hello.");
}



module.exports = MintApp;
