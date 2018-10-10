var Nlpl = require('nlpl-core');

var Snippet = require('./templates/snippet');

var snippets = {
  0: {
    id: 0,
    tokens: []
  }
};

document.querySelector('[data-js-nlpl-editor]').append(
  Snippet.template(snippets[0])
);

document.addEventListener('keypress', function(event) {
  if(
    event.key === 'Enter' &&
    event.target &&
    event.target.getAttribute('data-js-snippet-content')
  ) {
    event.preventDefault();

    const $element = event.target.parentElement;
    const id = +$element.dataset.id;

    const snippet = snippets[id];
    snippet.tokens = Nlpl.tokenize(event.target.textContent);

    Snippet.update(snippet, $element);
  }
});
