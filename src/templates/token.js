const Token = {
  template: function(token) {
    const template = document.getElementById('token-template').firstElementChild.cloneNode(true);

    template.innerText = token.original;
    template.className += ' token-' + token.partOfSpeech;

    return template;
  }
};

module.exports = Token;
