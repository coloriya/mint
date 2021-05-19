
const fs = require("fs");
const path = require("path");

const mintutils = require("./utils");
const MintRendition = require("./rendition");



function MintPalette (app, json) {
	this.app = app;
	this.json = json;
	this.index = app.palettes.length;

	this.title = json.title;
	this.name = json.name;
	this.filename = this.name + ".pug";
	this.setupRenditions();
}

const MintBaseClass = require("./baseclass");
MintPalette.prototype = new MintBaseClass(MintPalette);



MintPalette.prototype.setupRenditions = function () {
	this.renditions = [];
	for (let design of this.app.designs) {
		let rendition = new MintRendition(this, design);
		this.renditions.push(rendition);
	}
}

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
	for (let rendition of this.renditions) {
		console.log(`\t${rendition.getNIndex()}. ${rendition.getPresentableS()}`);
	}
}



MintPalette.prototype.getPageTitle = function () {
	return `${this.app.meta.app.prefix} | ${this.getTitle()} | palette`;
}

MintPalette.prototype.getPugProps = function () {
	return {
		app: this.app,
		json: this.json,
		palette: this,
		page: this
	};
}

MintPalette.prototype.getTemplate = function () {
	if (!this.template) {
		this.template = this.app.getTemplate("palette");
	}
	return this.template;
}



module.exports = MintPalette;
