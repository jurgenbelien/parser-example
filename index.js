const nearley = require('nearley');
const lexer = require('./lexer');
const grammar = require('./grammar');

const statement = process.argv.slice(2).join(' ');

const unitSizes = {
  h: 60,
  d: 480,
  w: 3360
};

const parser = new nearley.Parser(
  nearley.Grammar.fromCompiled(grammar)
);
parser.feed(statement);

/**
 * If the grammar used is ambiguous, it is possible a string can be parsed in
 * different ways. This would mean multiple parse trees that are equally valid.
 * A unambiguous grammar would result in only one tree, therefore we take the
 * first entry.
 */
const parserResult = parser.results[0] || [];

const reduced = parserResult
  .flat(Infinity)
  .filter(v => v !== null)
  .reduce((acc, token, index, array) => {
    if (token.type !== 'number') {
      acc[token.value] = (acc[token.value] || 0) + Number(array[index - 1].value);
    }
    return acc;
  }, {});

const total = Object.entries(reduced).reduce((acc, [unit, value]) => (
  acc + (unitSizes[unit] * value)
), 0);

const output = `"${statement}" = ${total} minutes`;
console.log(output);
