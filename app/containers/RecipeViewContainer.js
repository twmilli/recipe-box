var React = require('react');
var RecipeView = require('../components/RecipeView');
var Link = require('react-router').Link;
var FontAwesome =require('react-fontawesome');
var RecipeViewContainer = React.createClass({


  render: function(){
    console.log(this.props.location.query.modifyRecipe);
    return(
      <div>
        <Link to='/'>
          <FontAwesome name='arrow-left'/>
        </Link>
        <RecipeView query={this.props.location.query}/>
      </div>

    )
  }
});

module.exports = RecipeViewContainer;
