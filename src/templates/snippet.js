const Token = require('./token');

const Snippet = {
  template: function(tokens) {
    const template = document.getElementById('snippet-template').firstElementChild.cloneNode(true);

    const tokensFragment = document.createDocumentFragment();

    for(var i = 0; i < tokens.length; i++) {
      tokensFragment.appendChild(Token.template(tokens[i]));
    }

    const snippetContent = template.querySelector('[data-js-snippet-content]');
    snippetContent.appendChild(tokensFragment);

    return template;
  }
};

module.exports = Snippet;
