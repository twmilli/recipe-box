var React = require('react');
require('./stylesheets/main.scss');
var routes = require('./config/routes');
var ReactDOM = require('react-dom');

ReactDOM.render(
  routes,
  document.getElementById("app")
);
