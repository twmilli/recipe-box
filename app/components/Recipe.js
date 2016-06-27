var React = require('react');
var PropTypes = React.PropTypes;

var Recipe = React.createClass({
  propTypes:{
    recipe: PropTypes.object.isRequired
  },

  render: function(){
    var recipe = this.props.recipe;
    return(
      <div className = "recipe" onClick={this.props.showRecipe} id={this.props.id}>
        <h1>{recipe.title}</h1>
        <img src={recipe.image} alt=""/>
      </div>

    )
  }
});

module.exports = Recipe;
