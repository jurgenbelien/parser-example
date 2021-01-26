@{%
/**
 * A grammar describes relationships between tokens.
 * It is structured top-down.
 * Every grammar rule can have a callback function
 * to filter the result of the parser
 */
const lexer = require('./lexer');

const ignore = () => null;
%}

@lexer lexer

statement -> ( quantity ws:? ):+

quantity  -> number unit

number    -> %number

unit      -> ( %minute | %hour | %day | %week )

ws        -> %ws
          {% ignore %}
