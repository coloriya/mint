


function MintColor (app, json) {
	this.app = app;
	this.json = json;
	this.index = app.colors.length;

	this.hex = json.hex;
	this.title = json.title;
	this.name = json.name ? json.name : json.title.toLowerCase();
}

const MintBaseClass = require("./baseclass");
MintColor.prototype = new MintBaseClass(MintColor);



MintColor.prototype.getHexCode = function () {
	return "#" + this.hex;
}

MintColor.prototype.getPresentableS = function () {
	return `${this.getTitle()} (${this.getName()}) ${this.getHexCode()}`;
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
