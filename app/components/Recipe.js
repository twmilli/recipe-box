var React = require('react');
var PropTypes = React.PropTypes;
var ModifyRecipe = require('../containers/ModifyRecipe');

var Recipe = React.createClass({
  propTypes:{
    recipe: PropTypes.object.isRequired
  },

  render: function(){
    var recipe = this.props.recipe;
    return(
      <div className = "recipe">
        <ModifyRecipe
          showModal={false}
          title = {recipe.title}
          image = {recipe.image}
          ingredient_list={recipe.ingredient_list}
          delete={this.props.delete}
          id={this.props.id}
          modifyRecipe={this.props.modifyRecipe}/>
        <div onClick={this.props.showRecipe} id={this.props.id}>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt=""/>
        </div>
      </div>

    )
  }
});

module.exports = Recipe;
