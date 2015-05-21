'use strict';
var isFinite = require('is-finite');

module.exports = Math.cosh || function (x) {
	if (x === 0) {
		return 1;
	}

	if (!isFinite(x)) {
		return x;
	}

	return (Math.exp(x) + Math.exp(-x)) / 2;
};
