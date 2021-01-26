# Writing a parser in Nearley.js

A modest example of a parser written in Nearley.js.

## What is a parser?

A parser converts input, often text, into a data structure.

Consider the way a user logs hours worked in Atlassian Jira for instance:
> Time spent: (eg. 3w 4d 12h)

Jira has to convert text entered here into a canonical time quantity.
This can be done by writing a parser and then using the resulting data structure to do calculate the total value.

## Lexer

Let's consider the Jira example again: `3w 4d 12h`. The first step is to let a [lexer](./lexer.js) _tokenize_ the input, i.e., describing what kind of groups of characters we might encounter in the input and what their input is.

For the example text we encounter the following tokens, starting from the left:
* A digit, representing a value.
* The letter `w`, representing a unit.
* A space.
* Another digit.
* The letter `d`.
* Another space.
* Two digits, forming one number.
* The letter `h`.

Aforementioned tokens representing values are called _literals_ in lexical analysis, and the units can be treated as _keywords_. The _literals in the example are all integers, but we can imagine floats should also be accepted as literals. Lastly, we should tokenize whitespace.

## Grammar

After tokenizing we write a grammar to define in what sequence these token can occur. This is where Nearley comes in.

Let's consider our example input again: `3w 4d 12h`. Let's call this our `statement`. The `statement` is a sequence of `quantity` entries, separated by a whitespace _token_. If we would treat the whitespace as optional, we can describe the `statement` as follows:

```
statement -> ( quantity ws:? ):+
```

Note the `:?` and `:+`. These have the same meaning as in Regular Expressions; "zero or one occurance" and "one or more occurances" respectively.

Now that we have our first rule, we will have to continue writing rules until following every rule eventually ends in a token, like so:

```
ws -> %ws
```

## Parse results

Running the text through the parser will result in an array of parse tree, though that array  prefereably has only one entry. Having multiple parse trees means that the parser is ambiguous.

The parse tree is a multidimensional array where every rule or capture statement returns an array like so:

```
[
  //statement
  [
    // ( ... ):+ capture group
    [
      // quantity
    ],
    [
      // whitespace
    ]
  ]
]
```

## Using the parser for further computation

In our use case of converting the string into a canonical unit of time, the complete parse tree is not relevant.
