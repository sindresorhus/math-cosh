import test from 'ava';
import numberIsNan from 'number-is-nan';
import floatEqual from 'float-equal';

Math.cosh = undefined;
const cosh = require('.');

test(t => {
	t.true(numberIsNan(cosh(NaN)));
	t.is(cosh(+0), 1);
	t.is(cosh(-0), 1);
	t.is(cosh(Infinity), Infinity);
	t.is(cosh(-Infinity), -Infinity);
	t.is(cosh(0), 1);
	t.is(cosh(1), 1.5430806348152437);
	t.is(cosh(-1), 1.5430806348152437);
	t.true(floatEqual(cosh(12), 81377.39571257404));
	t.true(floatEqual(cosh(22), 1792456423.065798));
	t.true(floatEqual(cosh(-10), 11013.23292010332));
	t.true(floatEqual(cosh(-23), 4872401723.124454));
});
