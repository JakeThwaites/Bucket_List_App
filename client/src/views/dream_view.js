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

  const achievedBy = this.createCustomElement('p', "Dream Deadline", dream.achievedBy);
  dreamContainer.appendChild(achievedBy);

  const deleteButton = this.createDeleteButton(dream._id);
  dreamContainer.appendChild(deleteButton);

  this.container.appendChild(dreamContainer);
};

DreamView.prototype.createCustomElement = function (elementType, label, textContent) {
  const customElement = document.createElement(elementType);
  customElement.textContent = `${label}: ${textContent}`;

  return customElement;
};

DreamView.prototype.createDeleteButton = function (dreamID) {
  const button = document.createElement("button");
  button.classList.add("delete-button");
  button.value = dreamID;
  button.setAttribute('onclick', "confirm('Are you sure you want to give up on your dream?')");
  button.addEventListener('click', (event) => {
    PubSub.publish('DreamView:dream-delete-clicked', event.target.value);
  });
  return button;

};

DreamView.prototype.addPopUp = function () {
  confirm('Are you sure you want to give up on your dream?');
};

module.exports = DreamView;
