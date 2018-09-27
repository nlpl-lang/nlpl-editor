var Nlpl = require('nlpl-core');

var Snippet = require('./templates/snippet');

var snippets = [];
snippets.push(
  Nlpl.tokenize('Draw red circle')
);

snippet = Snippet.template(snippets[0]);
document.querySelector('[data-js-nlpl-editor]').append(snippet);
