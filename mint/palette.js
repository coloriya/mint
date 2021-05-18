


function MintPalette (app, json) {
	this.app = app;
	this.json = json;
	this.index = app.palettes.length;

	this.title = json.title;
	this.name = json.name ? json.name : json.title.toLowerCase();
}

const MintBaseClass = require("./baseclass");
MintPalette.prototype = new MintBaseClass(MintPalette);



MintPalette.prototype.getPresentableS = function () {
	return `${this.getTitle()} (${this.getName()})`;
}



MintPalette.prototype.printDetails = function () {
	//
}



module.exports = MintPalette;
