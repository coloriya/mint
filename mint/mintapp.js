
const fs = require("fs");
const path = require("path");

const MintColour = require("./colour");
const MintCombo = require("./combo");
const MintTemplate = require("./template");

function MintApp () {
	this.colours = [];
	this.combos = [];
}

MintApp.prototype.helloWorld = function () {
	console.log("MintApp says hello.");
}



module.exports = MintApp;
