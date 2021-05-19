
const fs = require("fs");
const path = require("path");

const pug = require("pug");



function MintTemplate (app, json) {
	this.app = app;
	this.json = json;
	this.index = app.templates.length;

	this.name = json.name;
	this.path = json.path ? json.path : (json.name + ".pug");
	this.fullPath = path.join(this.app.paths.templates, this.path);
}

const MintBaseClass = require("./baseclass");
MintTemplate.prototype = new MintBaseClass(MintTemplate);



MintTemplate.prototype.getPath = function () {
	return this.path;
}

MintTemplate.prototype.getFullPath = function () {
	return this.fullPath;
}

MintTemplate.prototype.getPresentableS = function () {
	return `${this.getName()} (${this.getFullPath()})`;
}



MintTemplate.prototype.getFunc = function () {
	if (!this.func) {
		this.func = pug.compileFile(this.fullPath);
	}
	return this.func;
}



MintTemplate.prototype.printDetails = function () {
	//
}



module.exports = MintTemplate;
