var React = require('react');
var ReactCssTransitionGroup = require('react-addons-css-transition-group');

var MainContainer = React.createClass({

  getInitialState: function(){
    return{
      recipe_list:[{
        image: 'http://www.wikihow.com/images/7/78/Cook-a-Western-Omelet-Intro.jpg',
        ingredient_list: ['egg', 'bacon', 'tomatoes'],
        num_list: [1,2,3],
        title: 'Omelette',
        servings : 1
      }]
    }
  },

  saveRecipeList: function(recipe_list){
    this.setState({
      recipe_list: recipe_list
    });
  },

  render: function(){
    return(
      <div className="main-container">
        {React.cloneElement(this.props.children, {key: this.props.location.pathname, saveRecipeList:this.saveRecipeList, recipe_list:this.state.recipe_list})}
      </div>
    )
  }
});

module.exports = MainContainer;
