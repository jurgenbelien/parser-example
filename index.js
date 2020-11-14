const nearley = require('nearley');
const lexer = require('./lexer');
const grammar = require('./grammar');
const { board, players } = require('./game');

lexer.reset(board);
// for (let state of lexer) {
//   console.log(state);
// }

const parser = new nearley.Parser(
  nearley.Grammar.fromCompiled(grammar)
);
parser.feed(board);

/**
 * If the grammar used is ambiguous, it is possible a string can be parsed in
 * different ways. This would mean multiple parse trees that are equally valid.
 * A unambiguous grammar would result in only one tree, therefore we take the
 * first entry.
 */
const result = parser.results[0];
// console.log(result);

const positionToPlayerId = symbol => players[symbol];

const getGameState = parseResult => parseResult
  .map(entry => (Array.isArray(entry)
    ? getGameState(entry)
    : positionToPlayerId(entry.type)
  ));

console.log(getGameState(result));
