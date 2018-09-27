const Token = {
  template: function(token) {
    const tokenHtml = document.createElement('div');
    tokenHtml.innerText = token.original;
    tokenHtml.className += 'token ' + token.partOfSpeech;

    return tokenHtml;
  }
};

module.exports = Token;
