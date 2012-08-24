var Helpers = require('./helpers');

// Generates valid brazillian CPF numbers
// See http://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas
exports.brCPF = function () {
	var baseNumber = Helpers.randomize('###.###.###'),
		number = Helpers.replaceSymbolWithNumber(baseNumber),
		firstDigit, secondDigit, parts;

	parts = number.split('');

	// Computing first verification digit
	firstDigit = 10 * parts[0] +
		9 * parts[1] +
		8 * parts[2] +
		7 * parts[4] +
		6 * parts[5] +
		5 * parts[6] +
		4 * parts[8] +
		3 * parts[9] +
		2 * parts[10];

	firstDigit = 11 - (firstDigit % 11);
	if (firstDigit >= 10) {
		firstDigit = 0;
	}

	// Computing second verification digit
	secondDigit = 11 * parts[0] +
		10 * parts[1] +
		9 * parts[2] +
		8 * parts[4] +
		7 * parts[5] +
		6 * parts[6] +
		5 * parts[8] +
		4 * parts[9] +
		3 * parts[10] +
		2 * firstDigit;

	secondDigit = 11 - (secondDigit % 11);
	if (secondDigit >= 10) {
		secondDigit = 0;
	}

	return number + '-' + firstDigit + secondDigit;
}