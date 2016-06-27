var React = require('react');
var PropTypes = React.PropTypes;

var Recipe = React.createClass({
  propTypes:{
    recipe: PropTypes.object.isRequired
  },

  getInitialState: function(){
    return{
      showRecipe: false
    };
  },

  handleClick: function(e){
    this.setState({
      showRecipe: (this.state.showRecipe ? false : true)
    });
  },

  render: function(){
    var recipe = this.props.recipe;
    return(
      <div className = "recipe">
        <h1>{recipe.title}</h1>
        <img src={recipe.image} alt=""/>
      </div>

    )
  }
});

module.exports = Recipe;
