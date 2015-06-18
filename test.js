'use strict';
var test = require('ava');
var numberIsNan = require('number-is-nan');
var floatEqual = require('float-equal');
Math.cosh = undefined;
var cosh = require('./');

test(function (t) {
	t.assert(numberIsNan(cosh(NaN)));
	t.assert(cosh(+0) === 1);
	t.assert(cosh(-0) === 1);
	t.assert(cosh(Infinity) === Infinity);
	t.assert(cosh(-Infinity) === -Infinity);
	t.assert(cosh(0) === 1);
	t.assert(cosh(1) === 1.5430806348152437);
	t.assert(cosh(-1) === 1.5430806348152437);
	t.assert(floatEqual(cosh(12), 81377.39571257404));
	t.assert(floatEqual(cosh(22), 1792456423.065798));
	t.assert(floatEqual(cosh(-10), 11013.23292010332));
	t.assert(floatEqual(cosh(-23), 4872401723.124454));
	t.end();
});
