const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Dreams = function (url) {
  this.url = "http://localhost:3000/api/dreams";
  this.request = new RequestHelper(this.url);
};

Dreams.prototype.bindEvents = function () {
  PubSub.subscribe("DreamFormView:dream-submitted", (event) => {
    this.postDream(event.detail);
  });

  PubSub.subscribe("DreamView:dream-delete-clicked", (event) => {
    this.deleteDream(event.detail);
  });

  PubSub.subscribe("DreamView:dream-completed", (event) => {
    this.completeDream(event.detail);
  });
};

Dreams.prototype.getData = function () {
  this.request.get()
    .then((dreams) => {
      PubSub.publish("Dreams:data-loaded", dreams);
    })
    .catch(console.error);
};

Dreams.prototype.postDream = function (dream) {
  this.request.post(dream)
  .then((dreams) => {
    PubSub.publish("Dreams:data-loaded", dreams);
  })
  .catch(console.error);
};

Dreams.prototype.deleteDream = function (dreamID) {
  this.request.delete(dreamID)
  .then((dreams) => {
    PubSub.publish("Dreams:data-loaded", dreams);
  })
  .catch(console.error);
};

Dreams.prototype.completeDream = function (dreamID) {
  this.request.put(dreamID)
  .then((dreams) => {
    PubSub.publish("Dreams:data-loaded", dreams);
  })
  .catch(console.error);
};

module.exports = Dreams;
