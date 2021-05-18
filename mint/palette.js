


function MintPalette (app, json) {
	this.app = app;
	this.json = json;
	this.index = app.palettes.length;

	this.title = json.title;
	this.name = json.name ? json.name : json.title.toLowerCase();
}



MintPalette.prototype.getTitle = function () {
	return this.title;
}

MintPalette.prototype.getName = function () {
	return this.name;
}

MintPalette.prototype.getIndex = function () {
	return this.index;
}

MintPalette.prototype.getNIndex = function () {
	return this.index + 1;
}

MintPalette.prototype.getDescription = function () {
	if (this.json.description) {
		return this.json.description;
	}
	return "No description for palette!";
}



module.exports = MintPalette;
