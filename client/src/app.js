const DreamFormView = require('./views/dream_form_view.js');
const Dreams = require('./models/dreams.js');
const DreamGridView = require('./views/dreams_grid_view.js');

document.addEventListener("DOMContentLoaded", () => {
  const dreamsForm = document.querySelector("form#dreams-form");

  const dreamsFormView = new DreamFormView(dreamsForm);
  dreamsFormView.bindEvents();

  const dreamsContainer = document.querySelector("div#dreams");
  const dreamsGridView = new DreamGridView(dreamsContainer);
  dreamsGridView.bindEvents();


  const dreams = new Dreams();
  dreams.bindEvents();
  dreams.getData();
});
