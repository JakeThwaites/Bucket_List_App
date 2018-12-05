const PubSub = require('../helpers/pub_sub.js');
const DreamView = require('./dream_view.js');

const DreamGridView = function(container) {
  this.container = container;
};

DreamGridView.prototype.bindEvents = function () {
  PubSub.subscribe("Dreams:data-loaded", (event) => {
    this.render(event.detail);
  });
};

DreamGridView.prototype.render = function (dreams) {
  this.container.innerHTML = "";
  const dreamView = new DreamView(this.container);
  dreams.forEach((dream) => dreamView.render(dream));
  
};


module.exports = DreamGridView;
