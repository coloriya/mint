
const fs = require("fs");
const path = require("path");

const pug = require("pug");



function MintDesign (app, json) {
	this.app = app;
	this.json = json;
	this.index = app.designs.length;

	this.name = json.name;
	this.path = json.path ? json.path : (json.name + ".pug");
	this.fullPath = path.join(this.app.paths.designs, this.path);
}



MintDesign.prototype.getName = function () {
	return this.name;
}

MintDesign.prototype.getPath = function () {
	return this.path;
}

MintDesign.prototype.getFullPath = function () {
	return this.fullPath;
}

MintDesign.prototype.getIndex = function () {
	return this.index;
}

MintDesign.prototype.getNIndex = function () {
	return this.index + 1;
}

MintDesign.prototype.getPresentableS = function () {
	return `${this.getName()} (${this.getFullPath()})`;
}



MintDesign.prototype.printDetails = function () {
	//
}



module.exports = MintDesign;
