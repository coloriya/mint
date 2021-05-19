
const fs = require("fs");
const path = require("path");



function MintColor (app, json) {
	this.app = app;
	this.json = json;
	this.index = app.colors.length;

	this.hex = json.hex;
	this.title = json.title;
	this.name = json.name ? json.name : json.title.toLowerCase();
	this.filename = this.name + ".pug";
}

const MintBaseClass = require("./baseclass");
MintColor.prototype = new MintBaseClass(MintColor);



MintColor.prototype.getInputPugPath = function () {
	if (!this.inputPugPath) {
		this.inputPugPath = path.join(this.app.paths.colors, "colors", this.filename);
	}
	return this.inputPugPath;
}

MintColor.prototype.getOutputHtmlPath = function () {
	if (!this.outputHtmlPath) {
		this.outputHtmlPath = path.join(this.app.paths.output, "color", this.getName(), "index.html");
	}
	return this.outputHtmlPath;
}



MintColor.prototype.getHexCode = function () {
	return "#" + this.hex;
}

MintColor.prototype.getPresentableS = function () {
	return `${this.getTitle()} ${this.getHexCode()} (${this.getInputPugPath()}) --> (${this.getOutputHtmlPath()})`;
}



MintColor.prototype.getPugProps = function () {
	return {
		app: this.app,
		json: this.json,
		color: this,
		base_depth: 2,
		page: this
	};
}

MintColor.prototype.getTemplate = function () {
	if (!this.template) {
		this.template = this.app.getTemplate("color");
	}
	return this.template;
}



MintColor.prototype.getPageTitle = function () {
	return `${this.app.meta.app.prefix} | ${this.getTitle()} | color`;
}

MintColor.prototype.getFgClassName = function () {
	return "fg-" + this.name;
}

MintColor.prototype.getBgClassName = function () {
	return "bg-" + this.name;
}



MintColor.prototype.getSCSSText = function () {
	let scssText = "";
	scssText += `.${this.getFgClassName()} { color: ${this.getHexCode()}; }\n`;
	scssText += `.${this.getBgClassName()} { background-color: ${this.getHexCode()}; }\n`;
	return scssText;
}



MintColor.prototype.printDetails = function () {
	//
}



module.exports = MintColor;
