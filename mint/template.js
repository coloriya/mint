
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



MintTemplate.prototype.getName = function () {
	return this.name;
}

MintTemplate.prototype.getPath = function () {
	return this.path;
}

MintTemplate.prototype.getFullPath = function () {
	return this.fullPath;
}

MintTemplate.prototype.getIndex = function () {
	return this.index;
}

MintTemplate.prototype.getNIndex = function () {
	return this.index + 1;
}

MintTemplate.prototype.getPresentableS = function () {
	return `${this.getName()} (${this.getFullPath()})`;
}



MintTemplate.prototype.printDetails = function () {
	//
}



module.exports = MintTemplate;
