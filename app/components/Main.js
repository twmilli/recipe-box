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

  addRecipe: function(image, ingredient_list, num_list, title){
    var new_recipe = this.createRecipe(image, ingredient_list,num_list, title);
    var new_list = this.state.recipe_list;
    new_list.push(new_recipe);
    this.setState({
      recipe_list: new_list
    });
  },

  modifyRecipe: function(image, ingredient_list, num_list, title, id){
    var new_recipe = this.createRecipe(image, ingredient_list, num_list, title);
    var new_list = this.state.recipe_list;
    new_list[id] = new_recipe;
    this.setState({
      recipe_list: new_list
    });
  },

  createRecipe: function(image, ingredient_list,num_list, title){
    var new_recipe = {
      image: image,
      ingredient_list: ingredient_list,
      num_list: num_list,
      title: title
    }
    return new_recipe;
  },

  delete: function(id){
    var new_list = this.state.recipe_list;
    delete new_list[id];
    this.setState({
      recipe_list: new_list
    });
  },


  showRecipe: function(e){
    var curr_recipe = this.state.recipe_list[e.currentTarget.id];
    this.context.router.push({
      pathname: '/recipeView',
      query:{
        image: curr_recipe.image,
        title: curr_recipe.title,
        ingredient_list: curr_recipe.ingredient_list,
        num_list: curr_recipe.num_list
      }
    });
  },

  render: function(){
    var recipes = this.state.recipe_list.map(function(recipe, key){
      return(
        <Recipe key={key} recipe={recipe} id={key} showRecipe={this.showRecipe}
          delete={this.delete}
          modifyRecipe={this.modifyRecipe}/>
    );
    }.bind(this));

    return (
      <div>
        <ModalContainer addRecipe={this.addRecipe} delete={this.delete}/>
        {recipes}
      </div>
    )
  }
});

module.exports = Main;
