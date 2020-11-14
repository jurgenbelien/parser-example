const moo = require('moo')

/**
 * A lexer or tokenizer does lexical analysis of the string to parse,
 * meaning it attaches a meaning or role to a set of characters.
 * It should be ordered in such a manner that more specific matches
 * occur before less specific matches.
 */

module.exports = moo.compile({
  ws: /[ \t]+/, /* whitespace */
  o:  ['o', 'O', '0'], /* nought */
  x:  ['x', 'X'], /* cross */
  _:  '_', /* empty cell */
  nl: { match: /\n/, lineBreaks: true }, /* newline */
});
