
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



MintApp.prototype.getColor = function (arg) {
	for (let color of this.colors) {
		if (color.getName() == arg) {
			return color;
		}
	}
	return null;
}

MintApp.prototype.getPalette = function (arg) {
	for (let palette of this.palettes) {
		if (palette.getName() == arg) {
			return palette;
		}
	}
	return null;
}

MintApp.prototype.getTemplate = function (arg) {
	for (let template of this.templates) {
		if (template.getName() == arg) {
			return template;
		}
	}
	return null;
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



MintApp.prototype.helloWorld = function () {
	// console.log("MintApp says hello.");
	console.log(`=> MintApp setup complete:`);
	console.log(`\t* ${this.colors.length} colors`);
	console.log(`\t* ${this.palettes.length} palettes`);
}



module.exports = MintApp;
