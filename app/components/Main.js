var React = require('react');
var Recipe = require('./Recipe');
var ModalContainer = require('../containers/ModalContainer');
var Link = require('react-router').Link;
var Main = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    var start_recipe = this.createRecipe('http://www.wikihow.com/images/7/78/Cook-a-Western-Omelet-Intro.jpg',
    ['3 eggs', '2 slices bacon', '2 tomatoes'], 'Omelette');
    return {
      recipe_list:[start_recipe,start_recipe]
    }
  },

  addRecipe: function(image, ingredient_list, title){
    var new_recipe = this.createRecipe(image, ingredient_list, title);
    var new_list = this.state.recipe_list;
    new_list.push(new_recipe);
    this.setState({
      recipe_list: new_list
    });
  },

  createRecipe: function(image, ingredient_list, title){
    var new_recipe = {
      image: image,
      ingredient_list: ingredient_list,
      title: title
    }
    return new_recipe;
  },

  showRecipe: function(e){
    console.log(e.currentTarget);
    var curr_recipe = this.state.recipe_list[e.currentTarget.id];
    console.log(curr_recipe);
    this.context.router.push({
      pathname: '/recipeView',
      query:{
        image: curr_recipe.image,
        title: curr_recipe.title,
        ingredient_list: curr_recipe.ingredient_list
      }
    });
  },

  render: function(){
    var recipes = this.state.recipe_list.map(function(recipe, key){
      return(<Recipe key={key} recipe={recipe} id={key} showRecipe={this.showRecipe}/>);
    }.bind(this));

    return (
      <div>
        <ModalContainer addRecipe={this.addRecipe}/>
        {recipes}
      </div>
    )
  }
});

module.exports = Main;
