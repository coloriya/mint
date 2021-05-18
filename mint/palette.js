
const fs = require("fs");
const path = require("path");



function MintPalette (app, json) {
	this.app = app;
	this.json = json;
	this.index = app.palettes.length;

	this.title = json.title;
	this.name = json.name;
	this.filename = this.name + ".pug";
}

const MintBaseClass = require("./baseclass");
MintPalette.prototype = new MintBaseClass(MintPalette);



MintPalette.prototype.getInputPugPath = function () {
	if (!this.inputPugPath) {
		this.inputPugPath = path.join(this.app.paths.colors, "palettes", this.filename);
	}
	return this.inputPugPath;
}

MintPalette.prototype.getOutputHtmlPath = function () {
	if (!this.outputHtmlPath) {
		this.outputHtmlPath = path.join(this.app.paths.output, "palette", this.getName(), "index.html");
	}
	return this.outputHtmlPath;
}



MintPalette.prototype.printDetails = function () {
	//
}



module.exports = MintPalette;
