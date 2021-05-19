
const fs = require("fs");
const path = require("path");

const mintutils = require("./utils");



function MintPage (app, json) {
	this.app = app;
	this.json = json;
	this.index = app.pages.length;

	this.title = json.title;
	this.name = mintutils.sanitizeName(json.name);

	this.filename = json.name + ".pug";
}

const MintBaseClass = require("./baseclass");
MintPage.prototype = new MintBaseClass(MintPage);



MintPage.prototype.getInputPugPath = function () {
	if (!this.inputPugPath) {
		this.inputPugPath = path.join(this.app.paths.pages, this.filename);
	}
	return this.inputPugPath;
}

MintPage.prototype.getOutputHtmlPath = function () {
	if (!this.outputHtmlPath) {
		if (this.json.out) {
			this.outputHtmlPath = path.join(this.app.paths.output, this.json.out);
		} else {
			this.outputHtmlPath = path.join(this.app.paths.output, this.name, "index.html");
		}
	}
	return this.outputHtmlPath;
}



MintPage.prototype.getPageTitle = function () {
	return `${this.app.meta.app.prefix} | ${this.getTitle()}`;
}

MintPage.prototype.getPugProps = function () {
	return {
		app: this.app,
		json: this.json,
		page: this
	};
}

MintPage.prototype.getTemplate = function () {
	if (!this.template) {
		this.template = this.app.getTemplate("page");
	}
	return this.template;
}



module.exports = MintPage;
