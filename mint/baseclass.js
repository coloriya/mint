
const fs = require("fs");
const path = require("path");



function MintBaseClass (mintClass) {
	this.mintClass = mintClass;
	this.classname = mintClass.name;
}



MintBaseClass.prototype.getTitle = function () {
	return this.title;
}

MintBaseClass.prototype.getPageTitle = function () {
	return this.title;
}

MintBaseClass.prototype.getName = function () {
	return this.name;
}

MintBaseClass.prototype.getIndex = function () {
	return this.index;
}

MintBaseClass.prototype.getNIndex = function () {
	return this.index + 1;
}

MintBaseClass.prototype.getDescription = function () {
	if (this.json.description) {
		return this.json.description;
	}
	return `No description for ${this.classname}!`;
}



MintBaseClass.prototype.getPresentableS = function () {
	return `${this.classname} (${this.getInputPugPath()}) ---> (${this.getOutputHtmlPath()})`;
}

MintBaseClass.prototype.printDetails = function () {
	console.log(`${this.classname} {}`);
	console.log(this.json);
	console.log(`\t  in: (${this.getInputPugPath()})`);
	console.log(`\t out: (${this.getOutputHtmlPath()})`);
}



MintBaseClass.prototype.needsUpdate = function () {
	return true;
}

MintBaseClass.prototype.render = function () {
	if (this.needsUpdate()) {
		this.forcedRender();
	}
}

MintBaseClass.prototype.forcedRender = function () {
	let htmlPath = this.getOutputHtmlPath();
	let dirPath = path.dirname(htmlPath);
	let template = this.getTemplate();
	let func = template.getFunc();
	let props = this.getPugProps();

	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, {
			recursive: true
		});
	}
	fs.writeFileSync(htmlPath, func(props));
}



module.exports = MintBaseClass;
