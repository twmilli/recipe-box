var React = require('react');
var Recipe = require('./Recipe');
var ModalContainer = require('../containers/ModalContainer');
var Link = require('react-router').Link;
var Main = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return {
      recipe_list:this.props.recipe_list
    }
  },


  addRecipe: function(image, ingredient_list, num_list, title, servings){
    var new_recipe = this.createRecipe(image, ingredient_list,num_list, title, servings);
    var new_list = this.state.recipe_list;
    new_list.push(new_recipe);
    this.setState({
      recipe_list: new_list
    });
  },

  modifyRecipe: function(image, ingredient_list, num_list, title, id, servings){
    var new_recipe = this.createRecipe(image, ingredient_list, num_list, title, servings);
    var new_list = this.state.recipe_list;
    new_list[id] = new_recipe;
    this.setState({
      recipe_list: new_list
    });
  },

  createRecipe: function(image, ingredient_list,num_list, title, servings){
    var new_recipe = {
      image: image,
      ingredient_list: ingredient_list,
      num_list: num_list,
      title: title,
      servings : servings
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
    this.props.saveRecipeList(this.state.recipe_list)
    this.context.router.push({
      pathname: '/recipeView',
      query:{
        image: curr_recipe.image,
        title: curr_recipe.title,
        ingredient_list: curr_recipe.ingredient_list,
        num_list: curr_recipe.num_list,
        servings: curr_recipe.servings
      }
    });
  },

  onerror: function(e){
    console.log(e.currentTarget);
    e.currentTarget.src='http://nemanjakovacevic.net/wp-content/uploads/2013/07/placeholder.png';
  },

  render: function(){
    var recipes = this.state.recipe_list.map(function(recipe, key){
      return(
        <Recipe key={key} recipe={recipe} id={key} showRecipe={this.showRecipe}
          delete={this.delete}
          onSubmit={this.modifyRecipe}
          onerror={this.onerror}/>
    );
    }.bind(this));

    return (
      <div>
        <ModalContainer onSubmit={this.addRecipe} delete={this.delete} id={this.state.recipe_list.length}/>
        {recipes}
      </div>
    )
  }
});

module.exports = Main;
