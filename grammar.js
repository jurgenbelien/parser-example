// Generated automatically by nearley, version 2.19.7
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

/**
 * A grammar describes relationships between tokens.
 * It is structured top-down.
 * Every grammar rule can have a callback function
 * to filter the result of the parser
 */
const lexer = require('./lexer');

const ignore = () => null;
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "statement$ebnf$1$subexpression$1$ebnf$1", "symbols": ["ws"], "postprocess": id},
    {"name": "statement$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statement$ebnf$1$subexpression$1", "symbols": ["quantity", "statement$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "statement$ebnf$1", "symbols": ["statement$ebnf$1$subexpression$1"]},
    {"name": "statement$ebnf$1$subexpression$2$ebnf$1", "symbols": ["ws"], "postprocess": id},
    {"name": "statement$ebnf$1$subexpression$2$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statement$ebnf$1$subexpression$2", "symbols": ["quantity", "statement$ebnf$1$subexpression$2$ebnf$1"]},
    {"name": "statement$ebnf$1", "symbols": ["statement$ebnf$1", "statement$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statement", "symbols": ["statement$ebnf$1"]},
    {"name": "quantity", "symbols": ["number", "unit"]},
    {"name": "number", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "unit$subexpression$1", "symbols": [(lexer.has("minute") ? {type: "minute"} : minute)]},
    {"name": "unit$subexpression$1", "symbols": [(lexer.has("hour") ? {type: "hour"} : hour)]},
    {"name": "unit$subexpression$1", "symbols": [(lexer.has("day") ? {type: "day"} : day)]},
    {"name": "unit$subexpression$1", "symbols": [(lexer.has("week") ? {type: "week"} : week)]},
    {"name": "unit", "symbols": ["unit$subexpression$1"]},
    {"name": "ws", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": ignore}
]
  , ParserStart: "statement"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
