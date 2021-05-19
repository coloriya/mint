
const MintApp = require("./mint");
const mint = new MintApp();

const args = process.argv;
const command = args[2] ? args[2].toLowerCase() : null;
const arg = args[3] ? args[3] : null;
const subarg = args[4] ? args[4] : null;

switch (command) {
	case "ls":
	case "list":
		switch (arg) {
			case "colors":
				mint.listColors();
				break;
			case "palettes":
				mint.listPalettes();
				break;
			case "templates":
				mint.listTemplates();
				break;
			case "designs":
				mint.listDesigns();
				break;
			case "pages":
				mint.listPages();
				break;
			default:
				console.log("Default list.");
		}
		break;

	case "render":
		switch (arg) {
			case "colors":
				mint.renderColors();
				break;
			case "palettes":
				mint.renderPalettes();
				break;
			case "designs":
				mint.renderDesigns();
				break;
			case "pages":
				mint.renderPages();
				break;
			default:
				console.log("Default render.");
		}
		break;

	case "detail":
		switch (arg) {
			case "color":
				mint.colorDetails(subarg);
				break;
			case "palette":
				mint.paletteDetails(subarg);
				break;
			case "template":
				mint.templateDetails(subarg);
				break;
			case "design":
				mint.designDetails(subarg);
				break;
			default:
				//
		}
		break;

	case "genscss":
	case "generatescss":
		mint.generateSCSS();
		break;

	case "hw":
	case "helloworld":
		mint.helloWorld();
		break;
	default:
		console.log("Default switch case.");
}


