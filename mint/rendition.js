
const fs = require("fs");
const path = require("path");

const mintutils = require("./utils");



function MintRendition (palette, design) {
	this.palette = palette;
	this.design = design;
	this.index = palette.renditions.length;
}

const MintBaseClass = require("./baseclass");
MintRendition.prototype = new MintBaseClass(MintRendition);



MintRendition.prototype.getInputPugPath = function () {
	if (!this.inputPugPath) {
		this.inputPugPath = "none";
	}
	return this.inputPugPath;
}

MintRendition.prototype.getOutputHtmlPath = function () {
	if (!this.outputHtmlPath) {
		this.outputHtmlPath = path.join(this.palette.app.paths.output, "palette",
			this.palette.getName(), this.design.getName(), "index.html");
	}
	return this.outputHtmlPath;
}



module.exports = MintRendition;
