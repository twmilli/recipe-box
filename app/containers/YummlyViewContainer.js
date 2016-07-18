var React = require('react');
var YummlyView = require('../components/YummlyView');
var YummlyHelper = require('../utils/YummlyHelper');
var ConfirmModal = require('../components/ConfirmModal');

var YummlyViewContainer = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return{
      recipe_list: [''],
      showModal: false
    }
  },

  open: function(e){
    var recipe = e.currentTarget;
    var recipeObject = {
      title: recipe.title,
      ingredient_list: recipe.getAttribute('data-ingredient'),
      image:recipe.getAttribute('data-image')
    }
    console.log(recipeObject);
    this.setState({
      currRecipe: recipeObject,
      showModal: true
    });
  },

  close: function(){
    this.setState({
      showModal: false
    });
  },

  import: function(){
    var recipe = this.state.currRecipe;
    this.setState({
      showModal: false
    });
    this.context.router.push({
      pathname: '/',
      query:{
        image: recipe.image,
        title: recipe.title,
        ingredient_list: [recipe.ingredient_list],
        num_list: this.newFilledArray(recipe.ingredient_list.split(',').length, 1)
      }
  });
},

newFilledArray: function (length, val) {
    var array = [];
    for (var i = 0; i < length; i++) {
        array[i] = val;
    }
    return array;
},

  handleSearch: function(e){
    var text = document.getElementById('search-text').value;
    YummlyHelper.getRecipeList(text).then(function(recipe_list){
      this.setState({
        recipe_list: recipe_list
      });
    }.bind(this));
  },

  render: function(){
    return(
      <div>
        <YummlyView handleSearch={this.handleSearch} recipe_list={this.state.recipe_list} open={this.open}/>
        <ConfirmModal showModal={this.state.showModal}
          close={this.close} onYes={this.import} onNo={this.close}/>
      </div>
    )
  }
});

module.exports = YummlyViewContainer;
