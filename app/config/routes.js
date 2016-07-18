var React = require('react');
var ReactRouter = require('react-router');
var RecipeViewContainer = require('../containers/RecipeViewContainer');


var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var MainContainer = require('../containers/MainContainer');
var RecipeModal = require('../components/RecipeModal');
var YummlyViewContainer = require('../containers/YummlyViewContainer');

var routes = (
  <Router history = {hashHistory}>
    <Route path='/' component = {MainContainer}>
      <IndexRoute component = {Main} />
      <Route path='recipeView' component={RecipeViewContainer} />
      <Route path='import' component={YummlyViewContainer}/>
    </Route>
  </Router>
);

module.exports= routes;
