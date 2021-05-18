
const MintApp = require("./mint");
const mint = new MintApp();

const args = process.argv;
const command = args[2] ? args[2].toLowerCase() : null;
const arg = args[3] ? args[3] : null;

switch (command) {
	case "lc":
	case "listcolors":
		mint.listColors();
		break;
	case "lp":
	case "listpalettes":
		mint.listPalettes();
		break;

	case "cd":
	case "colordetails":
		mint.colorDetails(arg);
		break;
	case "pd":
	case "palettedetails":
		mint.paletteDetails(arg);
		break;

	case "hw":
	case "helloworld":
		mint.helloWorld();
		break;
	default:
		console.log("Default switch case.");
}


