const Nlpl = require('nlpl-core');
const OutputWindow = require('./outputWindow');

const Snippet = require('./templates/snippet');

var snippets = {
  0: {
    id: 0,
    tokens: []
  }
};

document.querySelector('[data-js-nlpl-editor]').append(
  Snippet.template(snippets[0])
);

const updateSnippet = function($element, snippets) {
  const id = +$element.dataset.id;

  const snippet = snippets[id];
  snippet.tokens = Nlpl.tokenize($element.textContent);
  snippet.ast = Nlpl.parse(snippet.tokens);

  Snippet.update(snippet, $element);
  OutputWindow.update(snippets);
};

document.addEventListener('keypress', function(event) {
  if(
    event.key === 'Enter' &&
    event.target &&
    event.target.getAttribute('data-js-snippet-content')
  ) {
    event.preventDefault();

    updateSnippet(event.target, snippets);
  }
});
