
const fs = require("fs");
const path = require("path");

const pug = require("pug");



function MintDesign (app, json) {
	this.app = app;
	this.json = json;
	this.index = app.designs.length;

	this.name = json.name;
	this.path = json.path ? json.path : (json.name + ".pug");
}

const MintBaseClass = require("./baseclass");
MintDesign.prototype = new MintBaseClass(MintDesign);



MintDesign.prototype.getInputPugPath = function () {
	if (!this.inputPugPath) {
		this.inputPugPath = path.join(this.app.paths.designs, this.getName(), this.path);
	}
	return this.inputPugPath;
}

MintDesign.prototype.getOutputHtmlPath = function () {
	if (!this.outputHtmlPath) {
		this.outputHtmlPath = path.join(this.app.paths.output, "design", this.getName(), "index.html");
	}
	return this.outputHtmlPath;
}



MintDesign.prototype.getPath = function () {
	return this.path;
}

MintDesign.prototype.getFullPath = function () {
	return this.fullPath;
}



MintDesign.prototype.printDetails = function () {
	//
}



MintDesign.prototype.getPugProps = function () {
	return {
		app: this.app,
		json: this.json,
		design: this,
		page: this
	};
}

MintDesign.prototype.getTemplate = function () {
	if (!this.template) {
		this.template = this.app.getTemplate("design");
	}
	return this.template;
}



module.exports = MintDesign;
