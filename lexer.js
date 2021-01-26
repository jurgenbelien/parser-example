const moo = require('moo')

/**
 * A lexer or tokenizer does lexical analysis of the string to parse,
 * meaning it attaches a meaning or role to a set of characters.
 * It should be ordered in such a manner that more specific matches
 * occur before less specific matches.
 */

const ws = /[ \t]+/; /* whitespace */
const number = /(?:[1-9][0-9]*|0)(?:\.[0-9]+)?/;
// Keywords are special! See https://github.com/no-context/moo#keywords
const unit = {
  match: /[a-z]+/,
  type: moo.keywords({
    minute: 'm',
    hour: 'h',
    day: 'd',
    week: 'w',
  })
};

module.exports = moo.compile({
  unit,
  ws,
  number,
});
