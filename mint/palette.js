


function MintPalette (app, json) {
	this.app = app;
	this.json = json;
	this.name = json.name;
	this.title = json.title;
}



MintPalette.prototype.getTitle = function () {
	return this.title;
}

MintPalette.prototype.getName = function () {
	return this.name;
}

MintPalette.prototype.getDescription = function () {
	if (this.json.description) {
		return this.json.description;
	}
	return "No description for palette!";
}



module.exports = MintPalette;
