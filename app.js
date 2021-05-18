
const MintApp = require("./mint");
const mint = new MintApp();

const args = process.argv;
const first_arg = args[2] ? args[2].toLowerCase() : null;

switch (first_arg) {
	case "lc":
	case "listcolors":
		mint.listColors();
		break;
	case "lp":
	case "listpalettes":
		mint.listPalettes();
		break;
	case "hw":
	case "helloworld":
		mint.helloWorld();
		break;
	default:
		console.log("Default switch case.");
}


