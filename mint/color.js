


function MintColor (app, json) {
	this.app = app;
	this.json = json;
	this.hex = json.hex;
	this.name = json.name;
	this.title = json.title;
}



MintColor.prototype.getTitle = function () {
	return this.title;
}

MintColor.prototype.getName = function () {
	return this.name;
}

MintColor.prototype.getHexCode = function () {
	return this.hex;
}

MintColor.prototype.getDescription = function () {
	if (this.json.description) {
		return this.json.description;
	}
	return "No description!";
}



module.exports = MintColor;
