const Nlpl = require('nlpl-core');

const OutputWindow = {
  update: function(snippets) {
    const outputPanel = document.querySelector('[data-js-nlpl-output]');
    outputPanel.innerHTML = '';

    Object.keys(snippets).forEach(function(id) {
      const snippet = snippets[id];

      outputPanel.appendChild(
        Nlpl.eval(snippet.ast)
      );
    });
  }
};

module.exports = OutputWindow;
