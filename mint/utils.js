


function sanitizeName (name) {
	return name.toLowerCase();
}

function getElement (arg, arr) {
	for (let element of arr) {
		if (element.getName() == arg) {
			return element;
		}
	}
	return null;
}



const mintutils = {
	getElement: getElement,
	sanitizeName: sanitizeName
}

module.exports = mintutils;
