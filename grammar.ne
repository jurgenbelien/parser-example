@{%
/**
 * A grammar describes relationships between tokens.
 * It is structured top-down.
 * Every grammar rule can have a callback function
 * to filter the result of the parser
 */
const lexer = require('./lexer');

const ignore = () => null;
const value = ([ value ]) => value;
%}
@lexer lexer

board -> nl:? (line line line) nl:? {%
        ([_, lines]) => lines
%}

line  -> ws:? (cell cell cell) ws:? nl {%
        ([_, cells]) => cells
%}

cell  -> ws:? ( x | o | _ ) ws:? {%
        ([_, [cell]]) => cell
%}

x     -> %x {% value %}

o     -> %o {% value %}

_     -> %_ {% value %}

ws    -> %ws {% ignore %}

nl    -> %nl {% ignore %}
