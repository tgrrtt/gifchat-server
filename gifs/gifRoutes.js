var gifController = require('./gifController.js');

module.exports = function (app) {
  // app === gifRouter injected from app.js

  app.post('/', gifController.retrieveGif);
};
