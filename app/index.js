var React = require('react');
require('./stylesheets/main.scss');
var ReactDOM = require("react-dom");
var Main = require('./components/Main');

ReactDOM.render(
  <Main />,
  document.getElementById("app")
);
