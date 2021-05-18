
const MintApp = require("./mint");
const mint = new MintApp();

const args = process.argv;
const command = args[2] ? args[2].toLowerCase() : null;
const arg = args[3] ? args[3] : null;

switch (command) {
	case "lsc":
	case "listcolors":
		mint.listColors();
		break;
	case "lsp":
	case "listpalettes":
		mint.listPalettes();
		break;
	case "lst":
	case "listtemplates":
		mint.listTemplates();
		break;
	case "lsd":
	case "listdesigns":
		mint.listDesigns();
		break;

	case "cd":
	case "colordetails":
		mint.colorDetails(arg);
		break;
	case "pd":
	case "palettedetails":
		mint.paletteDetails(arg);
		break;
	case "td":
	case "templatedetails":
		mint.templateDetails(arg);
		break;
	case "dd":
	case "designdetails":
		mint.designDetails(arg);
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


