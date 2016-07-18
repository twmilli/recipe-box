var React = require('react');
var PropTypes = React.PropTypes;
var ModalContainer = require('../containers/ModalContainer');

var Recipe = React.createClass({
  propTypes:{
    recipe: PropTypes.object.isRequired
  },

  render: function(){
    var recipe = this.props.recipe;
    return(
      <div className = "recipe">
        <ModalContainer
          showModal={false}
          recipe={recipe}
          delete={this.props.delete}
          id={this.props.id}
          onSubmit={this.props.onSubmit}
          modify={true}/>
        <div onClick={this.props.showRecipe} id={this.props.id}>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} onError={this.props.onerror} className="center-block"/>
        </div>
      </div>

    )
  }
});

module.exports = Recipe;
