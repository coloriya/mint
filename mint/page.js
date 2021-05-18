
const fs = require("fs");
const path = require("path");



function MintPage (app, json) {
	this.app = app;
	this.json = json;
	this.index = app.pages.length;

	this.title = json.title;
	this.name = json.name;

	this.filename = json.name + ".pug";
	this.filepath = path.join(this.app.paths.pages, this.filename);

	if (this.json.out) {
		this.htmlpath = path.join(this.app.paths.output, this.json.out);
	} else {
		this.htmlpath = path.join(this.app.paths.output, this.name, "index.html");
	}
}



MintPage.prototype.getTitle = function () {
	return this.title;
}

MintPage.prototype.getName = function () {
	return this.name;
}

MintPage.prototype.getIndex = function () {
	return this.index;
}

MintPage.prototype.getNIndex = function () {
	return this.index + 1;
}

MintPage.prototype.getDescription = function () {
	if (this.json.description) {
		return this.json.description;
	}
	return "No description!";
}

MintPage.prototype.getPresentableS = function () {
	return `${this.filepath} ---> ${this.htmlpath}`;
}



module.exports = MintPage;
