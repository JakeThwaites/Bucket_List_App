const PubSub = require('../helpers/pub_sub.js');

const DreamView = function (container) {
  this.container = container;
};

DreamView.prototype.render = function (dream) {
  const dreamContainer = document.createElement('div');
  dreamContainer.id = 'dream';

  const name = this.createCustomElement('h3', "Name", dream.name);
  dreamContainer.appendChild(name);

  const description = this.createCustomElement('p', 'Description', dream.description);
  dreamContainer.appendChild(description);

  const achievedBy = this.createCustomElement('p', "Achieved By", dream.achievedBy);
  dreamContainer.appendChild(achievedBy);

  this.container.appendChild(dreamContainer);
};

DreamView.prototype.createCustomElement = function (elementType, label, textContent) {
  const customElement = document.createElement(elementType);
  customElement.textContent = `${label}: ${textContent}`;

  return customElement;
};

module.exports = DreamView;
