import test from 'ava';

test('test title', t => {
	t.snapshot({foo: 'bar'});

	t.snapshot({answer: 463});
});

test('another test', t => {
	t.snapshot(new Map());
});
