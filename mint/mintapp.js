
const fs = require("fs");
const path = require("path");

const MintColor = require("./color");
const MintPalette = require("./palette");
const MintPage = require("./page");
const MintTemplate = require("./template");
const MintDesign = require("./design");



function MintApp () {
	this.preferences = JSON.parse(fs.readFileSync("preferences.json"));
	this.paths = this.preferences.paths;
	this.setupColors();
	this.setupPalettes();
	this.setupTemplates();
	this.setupDesigns();
}

MintApp.prototype.setupColors = function () {
	this.colorsJsonPath = path.join(this.paths.colors, "colors.json");
	this.colors = [];
	this.colorObjects = {};

	this.colorsJson = JSON.parse(fs.readFileSync(this.colorsJsonPath));
	for (let colorJson of this.colorsJson.colors) {
		let color = new MintColor(this, colorJson);
		this.colors.push(color);
		this.colorObjects[color.name] = color;
	}
}

MintApp.prototype.setupPalettes = function () {
	this.palettesJsonPath = path.join(this.paths.colors, "palettes.json");
	this.palettes = [];
	this.paletteObjects = {};

	this.palettesJson = JSON.parse(fs.readFileSync(this.palettesJsonPath));
	for (let paletteJson of this.palettesJson.palettes) {
		let palette = new MintPalette(this, paletteJson);
		this.palettes.push(palette);
		this.paletteObjects[palette.name] = palette;
	}
}

MintApp.prototype.setupTemplates = function () {
	this.templatesJsonPath = path.join(this.paths.templates, "templates.json");
	this.templates = [];
	this.templateObjects = {};

	this.templatesJson = JSON.parse(fs.readFileSync(this.templatesJsonPath));
	for (let templateJson of this.templatesJson.templates) {
		let template = new MintTemplate(this, templateJson);
		this.templates.push(template);
		this.templateObjects[template.getName()] = template;
	}
}

MintApp.prototype.setupDesigns = function () {
	this.designsJsonPath = path.join(this.paths.designs, "designs.json");
	this.designs = [];
	this.designObjects = {};

	this.designsJson = JSON.parse(fs.readFileSync(this.designsJsonPath));
	for (let designJson of this.designsJson.designs) {
		let design = new MintDesign(this, designJson);
		this.designs.push(design);
		this.designObjects[design.getName()] = design;
	}
}



function getElement (arg, arr) {
	for (let element of arr) {
		if (element.getName() == arg) {
			return element;
		}
	}
	return null;
}

MintApp.prototype.getColor = function (arg) {
	return getElement(arg, this.colors);
}

MintApp.prototype.getPalette = function (arg) {
	return getElement(arg, this.palettes);
}

MintApp.prototype.getTemplate = function (arg) {
	return getElement(arg, this.templates);
}

MintApp.prototype.getDesign = function (arg) {
	return getElement(arg, this.designs);
}



MintApp.prototype.listColors = function () {
	console.log(`=> Listing ${this.colors.length} colors:`);
	for (let color of this.colors) {
		console.log(`\t${color.getNIndex()}. ${color.getPresentableS()}`);
	}
}

MintApp.prototype.listPalettes = function () {
	console.log(`=> Listing ${this.palettes.length} palettes:`);
	for (let palette of this.palettes) {
		console.log(`\t${palette.getNIndex()}. ${palette.getPresentableS()}`);
	}
}

MintApp.prototype.listTemplates = function () {
	console.log(`=> Listing ${this.templates.length} templates:`);
	for (let template of this.templates) {
		console.log(`\t${template.getNIndex()}. ${template.getPresentableS()}`);
	}
}

MintApp.prototype.listDesigns = function () {
	console.log(`=> Listing ${this.designs.length} designs:`);
	for (let design of this.designs) {
		console.log(`\t${design.getNIndex()}. ${design.getPresentableS()}`);
	}
}



MintApp.prototype.colorDetails = function (arg) {
	let color = this.getColor(arg);
	if (color) {
		color.printDetails();
	} else {
		console.log(`Color not found: '${arg}'`);
	}
}

MintApp.prototype.paletteDetails = function (arg) {
	let palette = this.getPalette(arg);
	if (palette) {
		palette.printDetails();
	} else {
		console.log(`Palette not found: '${arg}'`);
	}
}

MintApp.prototype.templateDetails = function (arg) {
	let template = this.getTemplate(arg);
	if (template) {
		template.printDetails();
	} else {
		console.log(`Template not found: '${arg}'`);
	}
}

MintApp.prototype.designDetails = function (arg) {
	let design = this.getDesign(arg);
	if (design) {
		design.printDetails();
	} else {
		console.log(`Design not found: '${arg}'`);
	}
}



MintApp.prototype.helloWorld = function () {
	// console.log("MintApp says hello.");
	console.log(`=> MintApp setup complete:`);
	console.log(`\t* ${this.colors.length} colors`);
	console.log(`\t* ${this.palettes.length} palettes`);
}



module.exports = MintApp;
