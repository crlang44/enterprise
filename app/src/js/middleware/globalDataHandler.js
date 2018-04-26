const getJunkDropdownData = require('../getJunkDropdownData');

// Simple Middleware that passes API data back as a template option if we're on a certain page
module.exports = function (app) {
  return function globalDataHandler(req, res, next) {
    const url = req.url;

    function isComponentRoute(componentName) {
      return new RegExp(componentName, 'g').test(url);
    }

    if (isComponentRoute('dropdown')) {
      res.opts.dropdownListData = getJunkDropdownData;
    }

    next();
  };
};
