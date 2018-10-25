const Token = require('./token');

const Snippet = {
  template: function(snippet) {
    const template = document.getElementById('snippet-template').firstElementChild.cloneNode(true);
    template.dataset.id = snippet.id;

    return template;
  },
  update: function(snippet, $element) {
    const snippetContent = $element.querySelector('[data-js-snippet-p]');
    $element.childNodes[0].nodeValue = '';
    snippetContent.innerHTML = '';

    snippet.tokens.forEach(function(token) {
      snippetContent.appendChild(Token.template(token));
      snippetContent.appendChild(document.createTextNode(' '));
    });
  }
};

module.exports = Snippet;
