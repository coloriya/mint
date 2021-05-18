
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

const MintBaseClass = require("./baseclass");
MintPage.prototype = new MintBaseClass(MintPage);



MintPage.prototype.getPresentableS = function () {
	return `${this.filepath} ---> ${this.htmlpath}`;
}



module.exports = MintPage;
