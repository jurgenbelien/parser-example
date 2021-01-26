const test = require('ava');
const nearley = require('nearley');
const grammar = require('./grammar');

const parser = new nearley.Parser(
  nearley.Grammar.fromCompiled(grammar)
);

[
	'1m',
	'1h 1m',
	'5h'
].map(value => test(value, t => {
	parser.feed(value);
	parser.finish();
	t.is(parser.results.length, 1);
}));
