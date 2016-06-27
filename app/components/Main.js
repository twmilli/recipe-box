var React = require('react');
var Recipe = require('./Recipe');
var RecipeModal = require('./RecipeModal');
var Main = React.createClass({

  getInitialState: function(){
    var start_recipe = this.createRecipe('http://www.wikihow.com/images/7/78/Cook-a-Western-Omelet-Intro.jpg',
    ['3 eggs, 2 slices bacon, 2 tomatoes'], 'Omelette');
    return {
      recipe_list:[start_recipe]
    }
  },

  addRecipe: function(image, ingredient_list, title){
    var new_recipe = createRecipe(image, ingredient_list, title);
    this.state.recipe_list.push(new_recipe);
    this.setState({
      recipe_list: this.state.recipe_list
    });
  },

  handleAddRecipe: function(){

  },

  createRecipe: function(image, ingredient_list, title){
    var new_recipe = {
      image: image,
      ingredient_list: ingredient_list,
      title: title
    }
    return new_recipe;
  },

  render: function(){
    var recipes = this.state.recipe_list.map(function(recipe, key){
      return(<Recipe key={key} recipe={recipe} />);
    });

    return (
      <div>
        <RecipeModal />
        {recipes}
      </div>
    )
  }
});

module.exports = Main;
