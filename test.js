'use strict';
var test = require('ava');
var numberIsNan = require('number-is-nan');
Math.cosh = undefined;
var cosh = require('./');

function epsilon(a, b, E) {
	return Math.abs(a - b) <= (E ? E : 1e-11);
};

test(function (t) {
	t.assert(numberIsNan(cosh(NaN)));
	t.assert(cosh(+0) === 1);
	t.assert(cosh(-0) === 1);
	t.assert(cosh(Infinity) === Infinity);
	t.assert(cosh(-Infinity) === -Infinity);
	t.assert(cosh(0) === 1);
	t.assert(cosh(1) === 1.5430806348152437);
	t.assert(cosh(-1) === 1.5430806348152437);
	t.assert(epsilon(cosh(12), 81377.39571257407, 3e-11));
	t.assert(epsilon(cosh(22), 1792456423.065795780980053377, 1e-5));
	t.assert(epsilon(cosh(-10), 11013.23292010332313972137));
	t.assert(epsilon(cosh(-23), 4872401723.1244513000, 1e-5));
	t.end();
});
