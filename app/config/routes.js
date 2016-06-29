var React = require('react');
var ReactRouter = require('react-router');
var RecipeViewContainer = require('../containers/RecipeViewContainer');


var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var Main = require('../components/Main');
var MainContainer = require('../containers/MainContainer');
var RecipeModal = require('../components/RecipeModal');

var routes = (
  <Router history = {browserHistory}>
    <Route path='/' component = {MainContainer}>
      <IndexRoute component = {Main} />
      <Route path='recipeView' component={RecipeViewContainer} />
    </Route>
  </Router>
);

module.exports= routes;
