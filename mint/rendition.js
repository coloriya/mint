
const fs = require("fs");
const path = require("path");

const mintutils = require("./utils");



function MintRendition (palette, design) {
	this.palette = palette;
	this.design = design;
}

const MintBaseClass = require("./baseclass");
MintRendition.prototype = new MintBaseClass(MintRendition);



module.exports = MintRendition;
