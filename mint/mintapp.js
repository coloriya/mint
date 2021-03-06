
const fs = require("fs");
const path = require("path");

const mintutils = require("./utils");
const MintColor = require("./color");
const MintPalette = require("./palette");
const MintPage = require("./page");
const MintTemplate = require("./template");
const MintDesign = require("./design");



function MintApp () {
	this.preferences = JSON.parse(fs.readFileSync("preferences.json"));
	this.paths = this.preferences.paths;
	this.meta = this.preferences.meta;
	this.setupDesigns();
	this.setupColors();
	this.setupPalettes();
	this.setupTemplates();
	this.setupPages();
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

MintApp.prototype.setupPages = function () {
	this.pagesJsonPath = path.join(this.paths.pages, "pages.json");
	this.pages = [];

	this.pagesJson = JSON.parse(fs.readFileSync(this.pagesJsonPath));
	for (let pageJson of this.pagesJson.pages) {
		let page = new MintPage(this, pageJson);
		this.pages.push(page);
	}
}



MintApp.prototype.getColor = function (arg) {
	return mintutils.getElement(arg, this.colors);
}

MintApp.prototype.getPalette = function (arg) {
	return mintutils.getElement(arg, this.palettes);
}

MintApp.prototype.getTemplate = function (arg) {
	return mintutils.getElement(arg, this.templates);
}

MintApp.prototype.getDesign = function (arg) {
	return mintutils.getElement(arg, this.designs);
}

MintApp.prototype.getPage = function (arg) {
	return mintutils.getElement(arg, this.pages);
}



MintApp.prototype.getGAText = function () {
	let text = fs.readFileSync(this.preferences.analytics);
	return text;
}



MintApp.prototype.listElements = function (array_name) {
	let arr = this[array_name];
	console.log(`=> Listing ${arr.length} ${array_name}:`);
	for (let element of arr) {
		console.log(`\t${element.getNIndex()}. ${element.getPresentableS()}`);
	}
}

MintApp.prototype.listColors = function () {
	this.listElements("colors");
}

MintApp.prototype.listPalettes = function () {
	this.listElements("palettes");
}

MintApp.prototype.listTemplates = function () {
	this.listElements("templates");
}

MintApp.prototype.listDesigns = function () {
	this.listElements("designs");
}

MintApp.prototype.listPages = function () {
	this.listElements("pages");
}

MintApp.prototype.listAll = function () {
	this.listColors();
	this.listPalettes();
	this.listTemplates();
	this.listDesigns();
	this.listPages();
}



MintApp.prototype.renderElements = function (array_name) {
	let arr = this[array_name];
	console.log(`=> Rendering ${arr.length} ${array_name}:`);
	for (let element of arr) {
		console.log(`\t${element.getNIndex()}. Rendering: (${element.getOutputHtmlPath()})`);
		element.render();
	}
}

MintApp.prototype.renderColors = function () {
	this.renderElements("colors");
}

MintApp.prototype.renderPalettes = function () {
	this.renderElements("palettes");
}

MintApp.prototype.renderDesigns = function () {
	this.renderElements("designs");
}

MintApp.prototype.renderPages = function () {
	this.renderElements("pages");
}

MintApp.prototype.renderAll = function () {
	this.renderColors();
	this.renderPalettes();
	this.renderDesigns();
	this.renderPages();
}

MintApp.prototype.renderColors = function () {
	this.renderElements("colors");
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

MintApp.prototype.pageDetails = function (arg) {
	let page = this.getPage(arg);
	if (page) {
		page.printDetails();
	} else {
		console.log(`Page not found: '${arg}'`);
	}
}



MintApp.prototype.generateSCSS = function () {
	let filepath = path.join(this.paths.gen, "colors.scss");
	let scssText = "";
	for (let color of this.colors) {
		scssText += color.getSCSSText();
	}

	fs.writeFileSync(filepath, scssText);
	console.log(`Saved: (${filepath})`);
}



MintApp.prototype.helloWorld = function () {
	// console.log("MintApp says hello.");
	console.log(`=> MintApp setup complete:`);
	console.log(`\t* ${this.colors.length} colors`);
	console.log(`\t* ${this.palettes.length} palettes`);
}



module.exports = MintApp;
