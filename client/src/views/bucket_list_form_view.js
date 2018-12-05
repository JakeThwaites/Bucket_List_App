const PubSub = require('../helpers/pub_sub.js');

const BucketListFormView = function (form) {
  this.form = form;
};

BucketListFormView.prototype.bindEvents = function () {
  this.form.addEventListener("submit", (event) => {
    this.handleSubmit(event);
  });
};

BucketListFormView.prototype.handleSubmit= function (event) {
  event.preventDefault();
  const newDream = this.createDream(event.target);
  PubSub.publish("BucketListFormView:dream-submitted", newDream);
  event.target.reset();
};

BucketListFormView.prototype.createDream = function (form) {
  const newDream = {
    name: form.name.value,
    description: form.description.value,
    achievedBy: form.achievedBy.value
  };

  return newDream;
};


module.exports = BucketListFormView;
