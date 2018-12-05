const PubSub = require('../helpers/pub_sub.js');

const DreamFormView = function (form) {
  this.form = form;
};

DreamFormView.prototype.bindEvents = function () {
  this.form.addEventListener("submit", (event) => {
    this.handleSubmit(event);
  });
};

DreamFormView.prototype.handleSubmit= function (event) {
  event.preventDefault();
  const newDream = this.createDream(event.target);
  PubSub.publish("DreamFormView:dream-submitted", newDream);
  event.target.reset();
};

DreamFormView.prototype.createDream = function (form) {
  const newDream = {
    name: form.name.value,
    description: form.description.value,
    achievedBy: form.achievedBy.value
  };

  return newDream;
};


module.exports = DreamFormView;
