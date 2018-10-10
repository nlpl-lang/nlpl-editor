const Token = require('./token');

const Snippet = {
  template: function(tokens) {
    const template = document.getElementById('snippet-template').firstElementChild.cloneNode(true);

    const tokensFragment = document.createDocumentFragment();

    tokens.forEach(function(token) {
      tokensFragment.appendChild(Token.template(token));
      tokensFragment.appendChild(document.createTextNode(' '));
    });

    const snippetContent = template.querySelector('[data-js-snippet-content]');
    snippetContent.appendChild(tokensFragment);

    return template;
  }
};

module.exports = Snippet;
